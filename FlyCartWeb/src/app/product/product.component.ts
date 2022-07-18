import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { DataSourceService } from '../shared/data-source.service';
import { Product } from '../shared/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})

export class ProductComponent implements OnInit {

  products: Product[] = [];
  product: Product = new Product();
  buttonMode : boolean = true;
  categories : Category[] = [];
  buttonStyle : string;
  preImage : string = '/../assets/images/frame.png';
  constructor(private dataSource: DataSourceService) {
    this.buttonStyle ? "btn btn-primary" : "btn btn-info";
    this.getProducts();
    this.getCategories();
    this.product.images = this.preImage;
  }

  // if (this.buttonMode) {
  //   this.buttonStyle ? "btn btn-primary" : "btn btn-info";
  // }



  getProducts() {
    return this.dataSource
      .getProducts()
      .subscribe((data) => (this.products = data));
  }


  getProduct(productID: number) {
    return this.dataSource.getProduct(productID).subscribe((response) => {
     (this.product.productID = response.productID);
    });
  }

  onSubmit() {
    if(this.buttonMode){
      this.insertProduct();
      this.getProducts();
    }
    else{
      this.updateProduct();
      this.getProducts();
    }
  }
  insertProduct() {
    this.dataSource.createProduct(this.product).subscribe((response) => {
      {
        this.product = new Product();
        this.getProducts();
        console.log(response);
      }
      
    }, error => {this.getProducts(), this.product = new Product(), this.product.images = this.preImage});
  }
  populateProduct(product: Product) {
    this.product = new Product();
    this.product = Object.assign({}, product);
    this.buttonMode = false;
  }

  updateProduct() {
    this.dataSource
      .editProduct(this.product)
      .subscribe((response) => this.getProducts(), error => {this.getProducts(), this.product.images = this.preImage});
      this.buttonMode = true;

  }

  deleteProduct(productID: number) {
    return this.dataSource
      .deleteProduct(productID)
      .subscribe((Response) => {this.getProducts(), this.ngOnInit()}, error => this.getProducts());
  }

  getCategories() {
    return this.dataSource
      .getCategories()
      .subscribe((response) => this.categories = response);
  }
 
  
  // fileToUpload : File;

  // handleFile(file : FileList){
  //   this.fileToUpload = file.item(0);
  //   var reader = new FileReader();
  //   reader.onload = (event : any) => {
  //     this.uploadedImage = event.target.result;
  //   }
  //   this.fileName = this.fileToUpload.name;
  //   reader.readAsDataURL(this.fileToUpload);
  // }

  handleFile(event : any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (event : any) => {
        this.product.images = event.target.result;

      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit(): void {
    
  }
}

import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/shared/data-source.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/product.model';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [],
})
export class ProductFormComponent implements OnInit {
  productID : number;
  // product: Product = {
  //   productID: 0,
  //   productName: '',
  //   categoryID: 0,
  //   createdDate: new Date(),
  //   shortDescription: '',
  //   longDescription: '',
  //   price: 0,
  //   weight: 0,
  //   images: '',
  //   stock: true,
  // };

  product : Product = new Product();
  constructor(private dataSource: DataSourceService) {
    this.productID =Number (location.pathname.split('/')[3]);
    this.getProduct(this.productID);
    
  }
  onSubmit() {
    this.dataSource
      .createProduct(this.product)
      .subscribe((response) =>  {this.product = {
        productID: 0,
        productName: '',
        categoryID: 0,
        createdDate: new Date(),
        shortDescription: '',
        longDescription: '',
        price: 0,
        weight: 0,
        images: '',
        stock: true,
      }});
  }

  getProduct(productID : number){
    return this.dataSource.getProduct(productID).subscribe((response) => {console.log(response), this.product.productID = response.productID});
  }

  ngOnInit(): void {
    // this.productID =<number><unknown>this.route.snapshot.paramMap.get('productID')
  }
}

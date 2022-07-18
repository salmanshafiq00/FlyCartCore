import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../shared/data-source.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products : Product[];
image1:string;
image2: string ;
image3:string ;
image4:string = ""
image5:string = ""
  constructor(private productData : DataSourceService) {
       this.productData.getProducts().subscribe((data) => this.products = data);
       this.image1 = "../../assets/images/panjabi.jpg";
       this.image2 = "../../assets/images/pexels-bess-hamiti-35188.jpg";
       this.image3 = "../../assets/images/pexels-anh-khac-6318739.jpg";
   }

  ngOnInit(): void {
    
  }

}

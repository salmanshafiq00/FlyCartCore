import { Component } from '@angular/core';
import { DataSourceService } from './shared/data-source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlyCartWeb';
  brandLogo : string = "FlyCart";
  productList : any;
  myImage:string = "../assets/images/pexels-bess-hamiti-35188.jpg";
  constructor(private products : DataSourceService) {
     
  }

  getProducts(){
    this.products.getProducts().subscribe((data) => {
      console.warn(data);
      
      this.productList = data
    })
  }

  
}

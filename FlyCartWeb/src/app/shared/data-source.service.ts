import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  baseUrl : string = "http://localhost:9503";

  // selectedProduct : Product = {};
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9503/product/");
  }

  getProduct(productID : number) : Observable<Product>{
    // return this.http.delete<Product>(this.baseUrl + "/product/delete/" + productID);
    return this.http.get<Product>("http://localhost:9503/product/GetProduct?productId=" +productID);
  }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>("http://localhost:9503/product/create", product)
  }

  editProduct(product: Product): Observable<Product>{
    return this.http.put<Product>("http://localhost:9503/product/edit", product)
  }

  deleteProduct(productID : number) : Observable<Product>{
    return this.http.delete<Product>("http://localhost:9503/product/delete?productId=" +productID);
  }
// =============================================================================
  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:9503/category/");
  }

  getCategory(categoryID: number): Observable<Category>{
    return this.http.get<Category>("http://localhost:9503/category/GetCategory?categoryID=" +categoryID);
  }

  createCategory(category : Category) : Observable<Category>{
    return this.http.post<Category>("http://localhost:9503/category/create", category);
  }

  editCategory(category: Category): Observable<Category>{
    return this.http.put<Category>("http://localhost:9503/category/edit", category)
  }

  deleteCategory(categoryID : number) : Observable<Category>{
    return this.http.delete<Category>("http://localhost:9503/category/delete?categoryID=" +categoryID);
  }
}

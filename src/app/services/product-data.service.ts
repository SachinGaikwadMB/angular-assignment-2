import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductDataService {


  constructor(private http : HttpClient) { }

  /*Method to fetch Product data*/
  fetchProductData() {
    return this.http.get("http://localhost:3000/product");
  }

  /*Method to post data */
  postData(data : any) {
    return this.http.post("http://localhost:3000/product", data);
  }

  getProductById(id:Number){
    return this.http.get('http://localhost:3000/product/'+id);
  }

  /*Method to delete data*/
  deleteProductRequest(id:Number){
    return this.http.delete('http://localhost:3000/product/'+id);
  }

  
 }

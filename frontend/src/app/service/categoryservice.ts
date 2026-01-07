// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Categoryservice {
//   constructor(private http: HttpClient) {}

//   public categories() {
//     return this.http.get('${baseUrl}/category/');}
  
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Categoryservice {

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:8080/category/');
  }

  //add category
  public addCategory(category: { title: string; description: string; }){
    return this.http.post('http://localhost:8080/category/', category);


  }
}



// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Categoryservice } from '../../../service/categoryservice';
// import { RouterModule, RouterOutlet } from "../../../../../node_modules/@angular/router/types/_router_module-chunk";

// @Component({
//   selector: 'app-categories',
//   standalone: true,
//   imports: [CommonModule, ],
//   templateUrl: './catgories.html',
//   styleUrls: ['./catgories.css'],
// })
// export class CategoriesComponent implements OnInit {

//   categories: any[] = [];

//   constructor(private categoryService: Categoryservice) {}

//   ngOnInit(): void {
//     this.categoryService.getCategories().subscribe(
//       (data: any) => {
//         this.categories = data;
//         console.log('Categories:', this.categories);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Categoryservice } from '../../../service/categoryservice';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule   // ✅ REQUIRED for routerLink
  ],
  templateUrl: './catgories.html',
  styleUrls: ['./catgories.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: Categoryservice) {}
ngOnInit(): void {
  this.loadCategories();
}

loadCategories() {
  this.categoryService.getCategories().subscribe({
    next: (data: any) => {
      this.categories = data;
    },
    error: (err) => {
      console.error(err);
    }
  });
}

}

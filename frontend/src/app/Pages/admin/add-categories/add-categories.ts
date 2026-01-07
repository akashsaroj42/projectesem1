import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Categoryservice } from '../../../service/categoryservice';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-categories.html',
  styleUrls: ['./add-categories.css'],
})
export class AddCategoriesComponent {

  category = {
    title: '',
    description: ''
  };

  constructor(
    private categoryService: Categoryservice,
    private router: Router
  ) {}

  addCategory() {
    if (!this.category.title || !this.category.description) {
      Swal.fire('Error', 'All fields are required', 'error');
      return;
    }

    this.categoryService.addCategory(this.category).subscribe({
      next: () => {
        Swal.fire('Success', 'Category added successfully', 'success');
        this.router.navigate(['/admin-dashboard/categories']);
      },
      error: () => {
        Swal.fire('Error', 'Failed to add category', 'error');
      }
    });
  }
}

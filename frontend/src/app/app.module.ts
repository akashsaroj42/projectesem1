// app.module.ts (or your feature module)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Required for [(ngModel)]

// Angular Material Modules
import { MatInputModule } from '@angular/material/input'; // <-- Already listed
import { MatFormFieldModule } from '@angular/material/form-field'; // <-- Essential
import { MatIconModule } from '@angular/material/icon'; // <-- Required for <mat-icon>
import { MatButtonModule } from '@angular/material/button'; // <-- Required for <button mat-raised-button>
import {  HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './service/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Don't forget this!
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,

    
    // ... other modules
  ],

  providers:[
    authInterceptorProviders],
  // ... declarations, providers, etc.
})
export class AppModule { }


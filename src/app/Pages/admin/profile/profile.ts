// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { LoginService } from '../../../service/login';

// @Component({
//   selector: 'app-profile',
//   imports: [CommonModule],
//   templateUrl: './profile.html',
//   styleUrl: './profile.css',
//    standalone: true,
// })
// export class ProfileComponent implements OnInit {
//   today: Date = new Date(); 

//     userEmail: string = '';

//   constructor(private login: LoginService) {}

//   ngOnInit(): void {
//     const user = this.login.getUser();

//     if (user) {
//       this.userEmail = user.email; // ✅ adjust key if different
//     }
//   }

// }

// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { LoginService } from '../../../service/login';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, FormsModule], // ✅ ADD FormsModule
//   templateUrl: './profile.html',
//   styleUrls: ['./profile.css'],
// })
// export class ProfileComponent implements OnInit {

//   today: Date = new Date();

//   user: any = {};        // ✅ store full user object
//   userEmail: string = '';
//   userRole: string;

//   constructor(private login: LoginService) {}

//   ngOnInit(): void {
//     const user = this.login.getUser();

//     if (user) {
//       this.user = user;               // ✅ store user
//       this.userEmail = user.email;    // ✅ email binding
//     }
//   }
//   isAdmin(): boolean {
//     return this.userRole === 'ADMIN' || this.userRole === 'ROLE_ADMIN';
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../service/login';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class ProfileComponent implements OnInit {

  today: Date = new Date();

  user: any = {};            // full user object
  userEmail: string = '';
  userRole: string = '';     // ✅ initialize

  constructor(private login: LoginService) {}

  ngOnInit(): void {
    const user = this.login.getUser();

    if (user) {
      this.user = user;
      this.userEmail = user.email;
           // ✅ FIX: assign role
    }
  }
get role() {
  if (!this.user?.authorities?.length) return 'Normal ';
  return this.user.authorities[0].roleName === 'ROLE_ADMIN' ? 'Admin User' : 'Normal User';
}

get roleClass() {
  if (!this.user?.authorities?.length) return 'user';
  return this.user.authorities[0].roleName === 'ROLE_ADMIN' ? 'admin' : 'user';
}

  isAdmin(): boolean {
    return this.userRole === 'ADMIN' || this.userRole === 'ROLE_ADMIN';
  }
}

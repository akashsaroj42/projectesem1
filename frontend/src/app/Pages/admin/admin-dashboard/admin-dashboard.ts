
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { LoginService } from '../../../service/login';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.html',
//   styleUrls: ['./admin-dashboard.css'],
// })
// export class AdminDashboard implements OnInit {

//   userName: string = '';

//   constructor(
//     private login: LoginService,
//     private router: Router   // ✅ ADD ROUTER
//   ) {}

//   ngOnInit(): void {

    
//     const user = this.login.getUser();

//     if (user) {
//       this.userName = user.firstname
//         ? `${user.firstname} ${user.lastname}`
//         : user.username;
//     }
//   }

//   // ✅ LOGOUT NAVIGATION
//   logout(): void {
//     this.login.logout();           // clear token & user
//     this.router.navigate(['/login']); // go to login page
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../../../service/login';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
  imports: [RouterOutlet, RouterLinkWithHref],
})
export class AdminDashboard implements OnInit {

  userName: string = '';

  constructor(
    private login: LoginService,
    private router: Router,
    private location: Location   // ✅ added
  ) {}

  ngOnInit(): void {

    // 🔒 PREVENT BACK BUTTON
    history.pushState(null, '', location.href);
    window.onpopstate = () => {
      history.pushState(null, '', location.href);
    };

    // 🔹 GET USER DETAILS
    const user = this.login.getUser();

    if (user) {
      this.userName = user.firstname
        ? `${user.firstname} ${user.lastname}`
        : user.username;
    }
  }

  // ✅ LOGOUT — ONLY WAY OUT
  logout(): void {
    this.login.logout(); // clear token & user

    // 🔥 remove dashboard from history
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  // ✅ RELOAD CATEGORIES COMPONENT


}

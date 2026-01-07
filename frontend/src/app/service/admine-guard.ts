

// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { LoginService } from './login';

// export const adminGuard: CanActivateFn = () => {

//   const loginService = inject(LoginService);
//   const router = inject(Router);

//   // 🔒 NOT LOGGED IN
//   if (!loginService.isLoggedIn()) {
//     router.navigate(['/login'], { replaceUrl: true });
//     return false;
//   }

//   const role = loginService.getUserRole();

//   // 🔒 NOT ADMIN
//   if (role !== 'ADMIN') {
//     router.navigate(['/login'], { replaceUrl: true });
//     return false;
//   }

//   return true;
// };

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login';

export const adminGuard: CanActivateFn = () => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  // 🔒 NOT LOGGED IN
  if (!loginService.isLoggedIn()) {
    router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

  const role = loginService.getUserRole();

  // 🔒 ROLE NOT FOUND OR NOT ADMIN
  if (!role || role !== 'ADMIN') {
    router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

  return true; // ✅ ADMIN ALLOWED
};



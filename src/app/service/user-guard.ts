// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { LoginService } from './login';

// export const userGuard: CanActivateFn = () => {
//   const loginService = inject(LoginService);
//   const router = inject(Router);

//   // ❌ Not logged in
//   if (!loginService.isLoggedIn()) {
//     router.navigate(['/login']);
//     return false;
//   }

//   // ❌ Not normal user
//   if (loginService.getUserRole() !== 'NORMAL') {
//     router.navigate(['/login']);
//     return false;
//   }

//   return true; // ✅ NORMAL allowed
// };

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login';

export const userGuard: CanActivateFn = () => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isLoggedIn()) {
    router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

  const role = loginService.getUserRole();

  if (role !== 'NORMAL') {
    router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

  return true;
};

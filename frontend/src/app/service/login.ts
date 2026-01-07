// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { helper } from './Helper';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {

//   constructor(private http: HttpClient) {}

//   // ================= AUTH API =================

//   public generateToken(loginData: any) {
//     return this.http.post(
//       `${helper.baseUrl}/auth/generate-token`,
//       loginData
//     );
//   }

//   public getCurrentUser() {
//     return this.http.get(
//       `${helper.baseUrl}/auth/current-user`
//     );
//   }

  

//   // ================= TOKEN =================

//   public loginUser(token: string): boolean {
//     localStorage.setItem('token', token);
//     return true;
//   }

//   public getToken(): string | null {
//     return localStorage.getItem('token');
//   }
// //   public getToken(): string | null {
// //   if (typeof window === 'undefined') {
// //     return null;
// //   }
// //   return localStorage.getItem('token');
// // }


//   public isLoggedIn(): boolean {
//     const token = localStorage.getItem('token');
//     return !(token === null || token === '');
//   }

// //   public isLoggedIn(): boolean {
// //   if (typeof window === 'undefined') {
// //     return false; // 👈 SSR protection
// //   }

// //   const token = localStorage.getItem('token');
// //   return !(token === null || token === '');
// // }

//   public logout(): boolean {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.clear(); 
//     return true;
//   }

// //   public logout(): boolean {
// //   if (typeof window !== 'undefined') {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     localStorage.clear();
// //   }
// //   return true;
// // }

//   // ================= USER =================

//   public setUser(user: any) {
//     localStorage.setItem('user', JSON.stringify(user));
//   }

// //   public setUser(user: any) {
// //   if (typeof window !== 'undefined') {
// //     localStorage.setItem('user', JSON.stringify(user));
// //   }
// // }


//   public getUser() {
//     const userStr = localStorage.getItem('user');
//     if (userStr != null) {
//       return JSON.parse(userStr);
//     } else {
//       this.logout();
//       return null;
//     }
//   }


// // public getUser() {
// //   if (typeof window === 'undefined') {
// //     return null;
// //   }

// //   const userStr = localStorage.getItem('user');
// //   if (userStr != null) {
// //     return JSON.parse(userStr);
// //   } else {
// //     this.logout();
// //     return null;
// //   }
// // }

//   // public getUserRole() {
//   //   const user = this.getUser();
//   //   return user?.authorities[0]?.authority;
//   // }
  

//   getUserRole(): string | null {
//   const user = this.getUser();

//   if (!user || !user.userRoles || user.userRoles.length === 0) {
//     return null;
//   }

//   return user.userRoles[0].role.roleName;
// }

  
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { helper } from './Helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  // ================= AUTH API =================

  generateToken(loginData: any) {
    return this.http.post(`${helper.baseUrl}/auth/generate-token`, loginData);
  }

  getCurrentUser() {
    return this.http.get(`${helper.baseUrl}/auth/current-user`);
  }

  // ================= TOKEN =================

  loginUser(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  // ================= USER =================

  setUser(user: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  // getUser(): any | null {
  //   if (typeof window === 'undefined') return null;

  //   const userStr = localStorage.getItem('user');
  //   return userStr ? JSON.parse(userStr) : null;
  // }

  public getUser() {
  const userStr = localStorage.getItem('user');
  if (userStr != null) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
}


  // ================= ROLE =================

  getUserRole(): string | null {
    const user = this.getUser();

    if (!user?.userRoles?.length) return null;

    return user.userRoles[0].role?.roleName ?? null;
  }
}

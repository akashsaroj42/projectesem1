import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from '../../service/login';
import { emitKeypressEvents } from 'readline';


@Component({
  selector: 'app-login',
  imports: [FormsModule],   
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  loginData={
    username : '',
    password : ''
  }

  togglePassword(input: any) {
  const icon = document.getElementById('toggleIcon');

  if (input.type === "password") {
    input.type = "text";
    icon?.classList.remove("fa-eye");
    icon?.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon?.classList.remove("fa-eye-slash");
    icon?.classList.add("fa-eye");
  }
}





// }
formSubmit() {
  console.log('login check');

  // ✅ Validation
  if (!this.loginData.username?.trim()) {
    this.snack.open('Username is required', 'Close', { duration: 3000 });
    return;
  }

  if (!this.loginData.password?.trim()) {
    this.snack.open('Password is required', 'Close', { duration: 3000 });
    return;
  }

  // 🔥 CLEAR OLD SESSION FIRST
  this.login.logout();

  // 🔐 Generate token
  this.login.generateToken(this.loginData).subscribe({
    next: (data: any) => {
      console.log('Token response:', data);

      // ✅ Save token
      this.login.loginUser(data.token);

      // 👤 Fetch current user
      this.login.getCurrentUser().subscribe({
        next: (user: any) => {
          console.log('Logged in user:', user);

          // ✅ Save user
          this.login.setUser(user);

          // ✅ Read role DIRECTLY from response
          const role = user.userRoles[0].role.roleName;

          // if (role === 'ADMIN') {
          //   this.router.navigate(['/admin-dashboard']);
          // } else if (role === 'NORMAL') {
          //   this.router.navigate(['/user-dashboard']);
          // } else {
          //   this.login.logout();
          //   this.router.navigate(['/login']);
          // }
          if (role === 'ADMIN') {
  this.router.navigate(['/admin-dashboard'], { replaceUrl: true });
} else if (role === 'NORMAL') {
  this.router.navigate(['/user-dashboard'], { replaceUrl: true });
} else {
  this.login.logout();
  this.router.navigate(['/login'], { replaceUrl: true });
}

        },
        error: () => {
          this.snack.open('Failed to fetch user', 'Close', { duration: 3000 });
        }
      });
    },
    error: () => {
      this.snack.open('Invalid username or password', 'Close', { duration: 3000 });
    }
  });
}


constructor(private router: Router, 
  private snack: MatSnackBar,
private login: LoginService ) {}

goToRegister() {
  this.router.navigate(['/singup']);   // your signup route
}
}



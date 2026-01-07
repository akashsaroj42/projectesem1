import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { UserService } from '../../service/user';
import Swal from 'sweetalert2'
// FIXED IMPORT

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './singup.html',
  styleUrls: ['./singup.css']
})
export class SingupComponent {

  constructor(private userService: UserService) {}

  option: AnimationOptions = {
    path: 'lotties/Login.json',

    autoplay: true,
    loop: true
  };

  animationCreated(item: AnimationItem) {}

  user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    enabled: true,
    profile: 'Male'
  };

  onSubmit() {

    console.log("Signup Form Data:", this.user);

    if (
      !this.user.username ||
      !this.user.password ||
      !this.user.firstname ||
      !this.user.lastname ||
      !this.user.email ||
      !this.user.phone
    ) {
      alert("All fields are required!");
      return;
    }

  this.userService.addUser(this.user).subscribe({
  next: (data) => {
    console.log("Success", data);
    Swal.fire('registered successfully!' ,'User Id ' +data.id , 'success');
    //alert("User registered successfully!");
  },
  error: (err) => {
    console.error("Error", err);

    if (err.status === 409) {
      alert("Username already exists!");
    } else {
      alert("Something went wrong on server!");
    }
  }
});

  }
}

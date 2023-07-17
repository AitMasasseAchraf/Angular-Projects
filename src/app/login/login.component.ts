import { Component , OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit
 {
  // constructor(private auth: AuthComponent, private router: Router) { }
  username :string = "";
  password : string = "";
  errorMsg :string = "";


  constructor(private auth: AuthComponent, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      } 
      if (res === 403) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }
}

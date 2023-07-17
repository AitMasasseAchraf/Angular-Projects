import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AuthComponent {
 
  


  
    constructor(private router: Router) { }
  
    login(uname: string, pword: string) {
      if (uname === 'suren' && pword === '1234') {
        return 200;
      } else {
        return 403;
      }
    }
  
    logout() {
      this.router.navigate(['login']);
    }
  }


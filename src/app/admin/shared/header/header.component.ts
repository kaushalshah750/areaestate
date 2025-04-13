import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../../Models/Authentication';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  // user:Authentication = {
  //   Id: 0,
  //   Username: "",
  //   Password: "",
  //   First_name: "",
  //   Last_name: "",
  //   Role: {
  //     Id: 0,
  //     Name: ""
  //   }

  // }

  constructor(
    private router: Router
  ) {
    // this.user = JSON.parse(localStorage.getItem("user")!)
  }

  logOut() {
    this.router.navigate(['login'])
  }
}

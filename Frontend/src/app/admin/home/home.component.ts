import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Role } from '../Models/Role';
import { Authentication } from '../Models/Authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {

  constructor(private commonService:CommonService){}

  ngOnInit() {
    var role:Role = JSON.parse(localStorage.getItem("role")!)
    var user:Authentication = JSON.parse(localStorage.getItem("user")!)
    this.commonService.currentRole = role
    this.commonService.currentUser = user
  }
}

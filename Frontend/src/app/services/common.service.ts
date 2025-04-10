import { Injectable } from '@angular/core';
import { Role } from '../admin/Models/Role';
import { Authentication } from '../admin/Models/Authentication';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentRole:Role = {
    Id: 0,
    Name: ""
  }

  currentUser:Authentication = {
    Id: 0,
    Username: "",
    Password: "",
    First_name: "",
    Last_name: "",
    Role: this.currentRole
  }

  constructor() { }
}

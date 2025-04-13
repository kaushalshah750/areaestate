import { Injectable } from '@angular/core';
import { CurrentUser } from '../admin/Models/CurrentUser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  currentUser: CurrentUser = {
    Id: 0,
    First_name: "",
    Last_name: "",
    Email: "",
    Role: "",
    RoleId: 0
  }

  constructor() {
  }

}

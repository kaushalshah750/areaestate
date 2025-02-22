import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { RolesResponse } from '../admin/Models/Role';
import { AddUsersResponse } from '../admin/Models/AddUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/users'

  constructor(
    private authHttp: AuthService
  ) { }

  getAllRole(){
    return this.authHttp.get<RolesResponse>( this.url + "/role" )
  }

  createUser(){
    return this.authHttp.get<boolean>( this.url + "/add" )
  }
}

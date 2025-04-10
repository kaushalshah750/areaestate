import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { RolesResponse } from '../admin/Models/Role';
import { AddUsersResponse } from '../admin/Models/AddUser';
import { WorkingLocationsResponse } from '../admin/Models/WorkingLocation';
import { Users, UsersResponse } from '../admin/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/users'

  constructor(
    private authHttp: AuthService
  ) { }

  getAllUsers(){
    return this.authHttp.get<UsersResponse>( this.url )
  }

  getAllRole(){
    return this.authHttp.get<RolesResponse>( this.url + "/role" )
  }

  getAllWorkingLocation(){
    return this.authHttp.get<WorkingLocationsResponse>( this.url + "/working-location" )
  }

  createUser(user:Users){
    return this.authHttp.post<UsersResponse>( this.url + "/add", user )
  }
}

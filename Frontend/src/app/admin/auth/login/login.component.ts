import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Authentication, AuthenticationsResponse } from '../../Models/Authentication';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {
  username:string = ""
  password:string = ""

  constructor(
    private authenticationService: AuthenticationService,
    private commonService: CommonService,
    private router: Router
  ){}

  ngOnInit(){
    // this.login()
  }


  login(){
    var auth:Authentication = {
      Id: 0,
      Username: this.username,
      Password: this.password,
      First_name: "",
      Last_name: "",
      Role: {
        Id: 0,
        Name: ""
      }
    }
    
    this.authenticationService.login(auth).subscribe((res: AuthenticationsResponse) => {
      if(res.data){
        var user = {
          Id: res.data.Id,
          Username: res.data.Username,
          Password: res.data.Password,
          First_name: res.data.First_name,
          Last_name: res.data.Last_name,
        }
        var role = {
          Id: res.data.Role.Id,
          Name: res.data.Role.Name
        }
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("role", JSON.stringify(role))
        this.commonService.currentRole = role
        if(role.Name == "Admin"){
          this.router.navigate(["/admin/employee"])
        }else{
          this.router.navigate(["/admin/lead"])
        }
      }
    })
  }

}

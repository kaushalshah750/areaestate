import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Authentication, AuthenticationsResponse } from '../../Models/Authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string = ""
  password:string = ""

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ){}

  ngOnInit(){
    // this.login()
  }


  login(){
    var auth:Authentication = {
      Username: this.username,
      Password: this.password
    }
    
    console.log(this.username)
    console.log(this.password)

    this.authenticationService.login(auth).subscribe((res: AuthenticationsResponse) => {
      if(res.data){
        this.router.navigate(["/admin/employee/add"])
      }
      console.log(res.data)
    })
  }

}

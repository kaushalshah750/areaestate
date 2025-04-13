import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Authentication, AuthenticationsResponse } from '../../Models/Authentication';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { supabase } from 'src/integration/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  username: string = ""
  password: string = ""
  invalid: boolean = false

  constructor(
    private authenticationService: AuthenticationService,
    private commonService: CommonService,
    private router: Router
  ) { }

  async login() {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: this.username,
      password: this.password,
    })

    console.log(data)
    console.log(error)
    console.log(error?.message)

    if (error?.message == "Invalid login credentials") {
      this.invalid = true
    }

    if (data.session) {
      console.log(data.session)
      localStorage.setItem("sb-lcprulruuufucyvthzxx-auth-token", JSON.stringify(data?.session))
      this.router.navigate(["/admin/employee"])
    }

    // this.authenticationService.login(auth).subscribe( async (res: AuthenticationsResponse) => {
    //   if (res) {

    //     localStorage.setItem("sb-lcprulruuufucyvthzxx-auth-token", res.toString())
    //     console.log(res)


    //     // var user = {
    //     //   Id: res.data.Id,
    //     //   Username: res.data.Username,
    //     //   Password: res.data.Password,
    //     //   First_name: res.data.First_name,
    //     //   Last_name: res.data.Last_name,
    //     // }
    //     // var role = {
    //     //   Id: res.data.Role.Id,
    //     //   Name: res.data.Role.Name
    //     // }
    //     // localStorage.setItem("user", JSON.stringify(user))
    //     // localStorage.setItem("role", JSON.stringify(role))
    //     // this.commonService.currentRole = role
    //     // if(role.Name == "Admin"){
    //     //   this.router.navigate(["/admin/employee"])
    //     // }else{
    //     //   this.router.navigate(["/admin/lead"])
    //     // }
    //   }
    // })
  }

}

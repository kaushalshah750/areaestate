import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role, RolesResponse } from '../../Models/Role';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  fname:string = ""
  lname:string = ""
  phone:string = ""
  mobile:string = ""
  email:string = ""
  workinglocation:string = ""
  joiningdate:Date = new Date()
  role:string = ""
  roleData:Role[] = []
  dob:Date = new Date()
  currentaddress:string = ""
  permanentaddress:string = ""
  gender:string = ""
  reportsto:string = ""

  constructor(
    private userService: UserService
  ){}

  ngOnInit(){
    this.getRoles()
  }

  getRoles(){
    this.userService.getAllRole().subscribe((res:RolesResponse) => {
      this.roleData = res.data
    })
  }

  submit(){
    var add
    this.userService.createUser().subscribe((res:boolean) => {
      if(res){

      }
    })
  }
}

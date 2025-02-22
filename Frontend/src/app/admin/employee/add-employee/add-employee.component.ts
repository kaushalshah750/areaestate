import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role, RolesResponse } from '../../Models/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  roleData: Role[] = []

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      joiningdate: ['', Validators.required],
      role: ['', Validators.required],
      dob: ['', Validators.required],
      currentaddress: ['', Validators.required],
      permanentaddress: ['', Validators.required],
      workinglocation: ['', Validators.required],
      reportsto: ['', Validators.required]
    });
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

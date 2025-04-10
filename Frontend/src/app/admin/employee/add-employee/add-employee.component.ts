import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role, RolesResponse } from '../../Models/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { WorkingLocation, WorkingLocationsResponse } from '../../Models/WorkingLocation';
import { UsersResponse } from '../../Models/User';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.scss'],
    standalone: false
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup;
  roleData: Role[] = []
  workingLocationData: WorkingLocation[] = []
  
  constructor(
    private userService: UserService,
    private dialogue: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      Username: [this.data?.Username || '', Validators.required],
      Password: [this.data?.Password || '', Validators.required],
      First_name: [this.data?.First_name || '', Validators.required],
      Last_name: [this.data?.Last_name || '', Validators.required],
      Phone: [this.data?.Phone || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Mobile: [this.data?.Mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Email: [this.data?.Email || '', [Validators.required, Validators.email]],
      Gender: [this.data?.Gender || '', Validators.required],
      Joining_date: [new Date(this.data?.Joining_date) || '', Validators.required],
      Role_id: [this.data?.Role_id || 0, Validators.required],
      Dob: [this.data?.Dob || '', Validators.required],
      Current_Address: [this.data?.Current_Address || '', Validators.required],
      Permanent_Address: [this.data?.Permanent_Address || '', Validators.required],
      Working_location: [this.data?.Working_location || '', Validators.required],
      Reports_to: [this.data?.Reports_to || 0, Validators.required]
    });
    this.getRoles()
    this.getAllWorkingLocation()
  }

  getRoles(){
    this.userService.getAllRole().subscribe((res:RolesResponse) => {
      this.roleData = res.data
    })
  }

  getAllWorkingLocation(){
    this.userService.getAllWorkingLocation().subscribe((res:WorkingLocationsResponse) => {
      this.workingLocationData = res.data
    })
  }

  submit(){
    if(this.employeeForm.controls['Reports_to'].value == 0){
      this.employeeForm.controls['Reports_to'].setValue(null)
    }

    // if(this.employeeForm.valid){
      this.userService.createUser(this.employeeForm.value).subscribe((res:UsersResponse) => {
        if(res.data){
          this.dialogue.closeAll();
        }
      })
    // }
  }
  
  closeOverlay() {
    this.dialogue.closeAll()
  }
}

import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from '../../Models/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { WorkingLocation } from '../../Models/WorkingLocation';
import { Employee } from '../../Models/Employee';
import { DatePipe } from '@angular/common';

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
    private datePipe: DatePipe,
    private userService: UserService,
    private dialogue: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) { }

  ngOnInit(): void {
    var joiningDateFormatted = this.datePipe.transform(this.data?.joining_date || new Date(), 'yyyy-MM-dd');
    var dobFormatted = this.datePipe.transform(this.data?.dob, 'yyyy-MM-dd');
    console.log(joiningDateFormatted);
    console.log(dobFormatted);

    this.employeeForm = this.fb.group({
      Username: [this.data?.username || '', Validators.required],
      Password: ['', Validators.required],
      First_name: [this.data?.first_name || '', Validators.required],
      Last_name: [this.data?.last_name || '', Validators.required],
      Phone: [this.data?.phone || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Mobile: [this.data?.mobile || '', [Validators.pattern('^[0-9]{10}$')]],
      Email: [this.data?.email || '', [Validators.required, Validators.email]],
      Gender: [this.data?.gender || '', Validators.required],
      Joining_date: [joiningDateFormatted, Validators.required],
      Role_id: [this.data?.role_id || 0, Validators.required],
      Dob: [dobFormatted || '', Validators.required],
      Current_Address: this.data?.current_address || '',
      Permanent_Address: this.data?.permanent_address || '',
      Working_location: [this.data?.working_location_id || 0, Validators.required],
      Reports_to: this.data?.reports_to || 0
    });

    console.log(this.employeeForm.get('Joining_date')?.value);
    if (this.data) {
      this.employeeForm.get('Username')?.disable();
    }
    this.getRoles();
    this.getAllWorkingLocation();
  }

  async getRoles() {
    const { data, error } = await this.userService.getAllRole();
    if (error) {
      console.error('Error fetching user:', error);
    } else {
      this.roleData = data.map((employee: any) => ({
        ...employee,
      }));
    }
  }

  async getAllWorkingLocation() {
    const { data, error } = await this.userService.getAllWorkingLocation();
    if (error) {
      console.error('Error fetching user:', error);
    } else {
      this.workingLocationData = data.map((employee: any) => ({
        ...employee,
      }));
    }
  }

  async submit() {
    if (this.employeeForm.controls['Reports_to'].value == 0) {
      this.employeeForm.controls['Reports_to'].setValue(null)
    }

    console.log(this.employeeForm.value);

    if (this.employeeForm.valid) {
      const result = await this.userService.createUser(this.employeeForm.value);
      if (result) {
        this.dialogue.closeAll();
      } else {
        console.error("Error creating user");
      }
    }
  }

  closeOverlay() {
    this.dialogue.closeAll()
  }
}

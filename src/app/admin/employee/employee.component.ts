import { Component } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../Models/Employee';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: false
})
export class EmployeeComponent {
  displayedColumns: string[] = ['fname', 'lname', 'email', 'phone', 'gender', 'actions'];
  employeeDetail: Employee[] = [];

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.allUsers()
  }

  openDialog(user?: Employee): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      minWidth: '900px',
      height: 'fit-content',
      data: user
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (user) {
          const index = this.employeeDetail.indexOf(user);
          this.employeeDetail[index] = result;
        } else {
          this.employeeDetail.push(result);
        }
      }
    });
  }


  async allUsers() {
    const { data, error } = await this.userService.getAllUsers();
    if (error) {
      console.error('Error fetching user:', error);
    } else {
      this.employeeDetail = data.map((employee: any) => ({
        ...employee,
      }));
    }
  }

  deleteUser(user: Employee): void {
    // this.dataSource = this.dataSource.filter(u => u !== user);
  }
}

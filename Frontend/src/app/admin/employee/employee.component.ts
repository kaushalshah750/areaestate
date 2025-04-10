import { Component } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddUser } from '../Models/AddUser';
import { MatDialog } from '@angular/material/dialog';
import { Users, UsersResponse } from '../Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  standalone: false
})
export class EmployeeComponent {
  displayedColumns: string[] = ['fname', 'lname', 'email', 'phone', 'gender', 'actions'];
  dataSource: Users[] = [];

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.allUsers()
  }

  openDialog(user?: Users): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      minWidth: '900px',
      height: 'fit-content',
      data: user
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (user) {
          const index = this.dataSource.indexOf(user);
          this.dataSource[index] = result;
        } else {
          this.dataSource.push(result);
        }
      }
    });
  }

  allUsers() {
    this.userService.getAllUsers().subscribe((res: UsersResponse) => {
      this.dataSource = res.data
    })
  }

  deleteUser(user: Users): void {
    // this.dataSource = this.dataSource.filter(u => u !== user);
  }
}

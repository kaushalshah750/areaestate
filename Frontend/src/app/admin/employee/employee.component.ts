import { Component } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddUser } from '../Models/AddUser';
// import { MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    standalone: false
})
export class EmployeeComponent {
  displayedColumns: string[] = ['fname', 'lname', 'email', 'phone', 'gender', 'actions'];
  dataSource: AddUser[] = [];

  // constructor(public dialog: MatDialog) {}

  // openDialog(user?: AddUser): void {
  //   const dialogRef = this.dialog.open(AddEmployeeComponent, {
  //     width: '400px',
  //     data: user || {}
  //   });

  //   dialogRef.afterClosed().subscribe((result:any) => {
  //     if (result) {
  //       if (user) {
  //         const index = this.dataSource.indexOf(user);
  //         this.dataSource[index] = result;
  //       } else {
  //         this.dataSource.push(result);
  //       }
  //     }
  //   });
  // }

  // deleteUser(user: User): void {
  //   this.dataSource = this.dataSource.filter(u => u !== user);
  // }
}

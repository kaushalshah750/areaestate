import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/auth/login/login.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { LeadComponent } from './admin/lead/lead.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'lead',
        component: LeadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

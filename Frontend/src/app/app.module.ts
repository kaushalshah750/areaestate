import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './admin/employee/employee.component';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        AddEmployeeComponent,
        SidebarComponent,
        EmployeeComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }

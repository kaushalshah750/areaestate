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
import { LeadComponent } from './admin/lead/lead.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { AddLeadComponent } from './admin/lead/add-lead/add-lead.component';
import { ViewLeadComponent } from './admin/lead/view-lead/view-lead.component';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { AddCallDetailComponent } from './admin/lead/add-call-detail/add-call-detail.component';

@NgModule({ 
    declarations: [
        AppComponent,
        LoginComponent,
        AddEmployeeComponent,
        AddLeadComponent,
        SidebarComponent,
        LeadComponent,
        ViewLeadComponent,
        HomeComponent,
        HeaderComponent,
        EmployeeComponent,
        AddCallDetailComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,

        MatIconModule,
        MatTableModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle,
        ], 
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }

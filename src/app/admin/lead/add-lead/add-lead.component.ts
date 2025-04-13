import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeadService } from 'src/app/services/lead.service';
import { Authentication } from '../../Models/Authentication';
import { UserService } from 'src/app/services/user.service';
import { Employee } from '../../Models/Employee';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrl: './add-lead.component.scss',
  standalone: false
})
export class AddLeadComponent {
  leadForm!: FormGroup;
  users: Employee[] = []

  constructor(
    private leadService: LeadService,
    private dialogue: MatDialog,
    public commonService: CommonService,
    private userSerive: UserService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.leadForm = this.fb.group({
      Id: [this.data?.Id || 0, Validators.required],
      Name: [this.data?.Name || '', Validators.required],
      Email: [this.data?.Email || '', [Validators.required, Validators.email]],
      Number: [this.data?.Number || '', [Validators.required]],
      Requirement: [this.data?.Requirement || '', Validators.required],
      Status: [this.data?.Status || 'New', Validators.required],
      Assign_to: [this.data?.Assignee?.Id || null],
      Created_by: [this.commonService.currentUser.Id, Validators.required]
    });

    // if(this.commonService.currentRole.Name != "Admin" && this.data){
    //   this.leadForm.get('Name')?.disable()
    //   this.leadForm.get('Email')?.disable()
    //   this.leadForm.get('Number')?.disable()
    // }

    this.getusers();
  }

  submit() {
    if (this.leadForm.valid) {
      if (this.data) {
        this.leadService.updateLead(this.leadForm.value).subscribe((res: boolean) => {
          if (res) {
            this.closeOverlay()
          }
        })
      } else {
        this.leadService.addLead(this.leadForm.value).subscribe((res: boolean) => {
          if (res) {
            this.closeOverlay()
          }
        })
      }
    }
  }

  getusers() {
    // this.userSerive.getAllUsers().subscribe((res: Employee[]) => {
    //   this.users = res;
    // })
  }

  closeOverlay() {
    this.dialogue.closeAll()
  }


}

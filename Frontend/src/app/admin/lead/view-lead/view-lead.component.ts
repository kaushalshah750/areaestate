import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Lead } from '../../Models/Lead';

@Component({
  selector: 'app-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrl: './view-lead.component.scss',
  standalone: false
})
export class ViewLeadComponent {
  leadData: Lead = {
    Id: 0,
    Name: "",
    Email: "",
    Number: "",
    Requirement: "",
    Call_Status: "",
    Lead_Status: "",
    Last_call: "",
    Call_scheduled: "",
    Note: "",
    Status: "",
    Assigned_Date: "",
    Created_on: "",
    Updated_on: "",
    Creator: {
      Id: 0,
      First_name: "",
      Last_name: "",
      Email: ""
    },
    Assignee: {
      Id: 0,
      First_name: "",
      Last_name: "",
      Email: ""
    },
  }

  constructor(
    private dialogue: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.leadData = this.data
  }

  ngOnInit() {
  }

  closeOverlay() {
    this.dialogue.closeAll()
  }
}

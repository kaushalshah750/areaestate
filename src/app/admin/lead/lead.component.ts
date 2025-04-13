import { Component } from '@angular/core';
import { Lead, LeadsResponse } from '../Models/Lead';
import { LeadService } from 'src/app/services/lead.service';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewLeadComponent } from './view-lead/view-lead.component';
import { CommonService } from 'src/app/services/common.service';
import { LeadCount, LeadCountsResponse } from '../Models/LeadCount';
import { AddCallDetailComponent } from './add-call-detail/add-call-detail.component';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss',
  standalone: false
})
export class LeadComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'callstatus', 'requirement', 'actions'];
  dataSource: Lead[] = [];
  leadSection: string = "My"
  leadSubSection: string = "Active"
  leadCount: LeadCount = {
    ActiveCount: 0,
    BookingsCount: 0,
    DroppedCount: 0,
    EOICount: 0,
    NewCount: 0,
    OverdueCount: 0,
    PendingCount: 0,
    ScheduledCount: 0
  }

  constructor(
    public leadService: LeadService,
    public commonService: CommonService,
    public dialog: MatDialog
  ) {
    // if(commonService.currentRole.Name == "Admin"){
    //   this.displayedColumns = ['id', 'name', 'email', 'assignedTo', 'requirement', 'status', 'callstatus', 'actions'];
    //   this.leadSection = "All"
    // }
  }

  ngOnInit() {
    this.allLeads()
    this.numberOfLead()
  }

  switchSection(tab: string) {
    this.leadSection = tab
    this.leadSubSection = "Active"
    this.allLeads()
    this.numberOfLead()
  }

  switchSubSection(tab: string) {
    this.leadSubSection = tab
    this.allLeads()
    this.numberOfLead()
  }

  addCallDetails(lead: Lead) {
    let dialogRef: any

    dialogRef = this.dialog.open(AddCallDetailComponent, {
      minWidth: '900px',
      height: 'fit-content',
      data: lead
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.allLeads()
      this.numberOfLead()
    });

  }

  openDialog(lead?: Lead, page?: string) {
    let dialogRef: any
    if (page == "view") {
      dialogRef = this.dialog.open(ViewLeadComponent, {
        minWidth: '900px',
        height: 'fit-content',
        data: lead
      });
    } else {
      dialogRef = this.dialog.open(AddLeadComponent, {
        minWidth: '900px',
        height: 'fit-content',
        data: lead
      });
    }

    dialogRef.afterClosed().subscribe((result: any) => {
      this.allLeads()
      this.numberOfLead()
      // if (result) {
      //   if (lead) {
      //     const index = this.dataSource.indexOf(lead);
      //     this.dataSource[index] = result;
      //   } else {
      //     this.dataSource.push(result);
      //   }
      // }
    });
  }

  allLeads() {
    var leadData = {
      type: this.leadSection,
      subType: this.leadSubSection,
      user: this.commonService.currentUser.Id,
      // role: this.commonService.currentRole.Name
    }
    this.leadService.getAllLeads(leadData).subscribe((res: LeadsResponse) => {
      this.dataSource = res.data
    })
  }

  numberOfLead() {
    var leadData = {
      user: this.commonService.currentUser.Id,
      // role: this.commonService.currentRole.Name
    }
    this.leadService.numberOfLead(leadData).subscribe((res: LeadCountsResponse) => {
      this.leadCount = res.data
    })
  }

  deleteLead(lead?: Lead) { }

  redirectToWhatsApp(lead?: Lead) {
    let url = `https://wa.me/918261861082?text=${encodeURIComponent(`
*Hello ${lead?.Name},*  

I hope you're doing well. This is ${this.commonService.currentUser.First_name} ${this.commonService.currentUser.Last_name} from Area Estate. I tried reaching you regarding your interest in ${lead?.Requirement} and would love to assist you in finding the perfect property.  
    
Please let me know a convenient time for a quick chat, or feel free to reply here with any questions. Looking forward to connecting with you!  
    
Best regards,
${this.commonService.currentUser.First_name} ${this.commonService.currentUser.Last_name}
Area Estate`)}`;
    window.open(url, "_blank")
  }
}

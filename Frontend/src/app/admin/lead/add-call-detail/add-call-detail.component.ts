import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LeadService } from 'src/app/services/lead.service';
import { AddCallDetail } from '../../Models/AddCallDetail';

@Component({
  selector: 'app-add-call-detail',
  templateUrl: './add-call-detail.component.html',
  styleUrl: './add-call-detail.component.scss',
  standalone: false
})
export class AddCallDetailComponent {
  currentDate = new Date(Date.now()).toLocaleDateString('en-CA').split("T")[0]
  leadForm!: FormGroup;

  constructor(
    private dialogue: MatDialog,
    private fb: FormBuilder,
    private leadService: LeadService,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
    this.leadForm = this.fb.group({
      Id: [this.data?.Id || '', Validators.required],
      Lead_Status: ['', Validators.required],
      Status: ['', Validators.required],
      CallStatus: ['', Validators.required],
      Note: ['', Validators.required],
      ScheduledTime: ['', Validators.required],
      ScheduledDate: ['', Validators.required],
    });

  }

  closeOverlay() {
    this.dialogue.closeAll()
  }

  statusChange(){
    console.log(this.data)
    console.log(this.leadForm.get('CallStatus')?.value)
    if(this.leadForm.get('CallStatus')?.value == "Call Not Answered" || this.leadForm.get('CallStatus')?.value == "Switch Off" ){
      const now = new Date();
      now.setHours(now.getHours() + 3);
      const formattedTime = now.toTimeString().slice(0, 5);

      this.leadForm.get('ScheduledDate')?.setValue(new Date(Date.now()).toISOString().split("T")[0])
      this.leadForm.get('ScheduledTime')?.setValue(formattedTime)

      if(this.data?.Lead_Status == "New"){
        this.leadForm.get('Status')?.setValue("Cold")
      }
      
      this.leadForm.get('ScheduledDate')?.disable()
      this.leadForm.get('ScheduledTime')?.disable()
      this.leadForm.get('Lead_Status')?.setValue("Scheduled")
    }else if(this.leadForm.get('CallStatus')?.value == "Follow Up"){
      if(this.data?.Lead_Status == "New"){
        this.leadForm.get('Status')?.setValue("Warm")
      }
      
      this.leadForm.get('ScheduledDate')?.enable()
      this.leadForm.get('ScheduledTime')?.enable()
      console.log(this.currentDate)
      console.log(this.leadForm.get('ScheduledDate')?.value)
    }else{
      if(this.data?.Lead_Status == "New"){
        this.leadForm.get('Status')?.setValue("Hot")
      }
    }
  }

  submit() { 
    if(this.currentDate == this.leadForm.get('ScheduledDate')?.value){
      this.leadForm.get('Lead_Status')?.setValue("Scheduled")
    }else{
      this.leadForm.get('Lead_Status')?.setValue("Active")
    }
    
    var lead:AddCallDetail = {
      Id: this.leadForm.get('Id')?.value,
      Lead_Status: this.leadForm.get('Lead_Status')?.value,
      Status: this.leadForm.get('Status')?.value,
      Call_Status: this.leadForm.get('CallStatus')?.value,
      Note: this.leadForm.get('Note')?.value,
      Call_scheduled: this.leadForm.get('ScheduledDate')?.value + " " + this.leadForm.get('ScheduledTime')?.value + ":00"
    }
    console.log(lead)

    if(this.leadForm.valid){
      this.leadService.updateCallDetails(lead).subscribe((res:boolean) => {
        if(res){
          this.closeOverlay()
        }
      })
    }

  }
}

import { Injectable } from '@angular/core';
import { LeadsResponse } from '../admin/Models/Lead';
import { AuthService } from './auth.service';
import { AddLead } from '../admin/Models/AddLead';
import { LeadCountsResponse } from '../admin/Models/LeadCount';
import { AddCallDetail } from '../admin/Models/AddCallDetail';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  url = 'api/leads'

  constructor(
    private authHttp: AuthService
  ) { }

  getAllLeads(leadData:any){
    return this.authHttp.post<LeadsResponse>( this.url, leadData )
  }

  numberOfLead(leadData:any){
    return this.authHttp.post<LeadCountsResponse>( this.url + "/count", leadData )
  }

  getAllLeadsById(id:number){
    return this.authHttp.get<LeadsResponse>( this.url + "/" + id )
  }

  addLead(lead: AddLead){
    return this.authHttp.post<boolean>( this.url + "/add", lead )
  }

  updateLead(lead: AddLead){
    return this.authHttp.post<boolean>( this.url + "/update", lead )
  }

  updateCallDetails(lead: AddCallDetail){
    return this.authHttp.post<boolean>( this.url + "/update-call", lead )
  }

}

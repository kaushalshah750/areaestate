import { UserInfo } from "./UserInfo"

export interface LeadsResponse{
    err: boolean;
    errMessage: string;
    data: Lead[]
}

export interface Lead {
    Id: number
    Name: string
    Email: string
    Number: string
    Requirement: string
    Call_Status: string
    Lead_Status: string
    Last_call: string
    Call_scheduled: string
    Note: string
    Status: string
    Assigned_Date: string
    Created_on: string
    Updated_on: string
    Creator: UserInfo
    Assignee: UserInfo
}
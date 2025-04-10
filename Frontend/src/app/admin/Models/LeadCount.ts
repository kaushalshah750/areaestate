import { UserInfo } from "./UserInfo"

export interface LeadCountsResponse{
    err: boolean;
    errMessage: string;
    data: LeadCount
}

export interface LeadCount {
    ActiveCount: number
    BookingsCount: number
    DroppedCount: number
    EOICount: number
    NewCount: number
    OverdueCount: number
    PendingCount: number
    ScheduledCount: number
}
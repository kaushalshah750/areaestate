export interface AddUsersResponse{
    err: boolean;
    errMessage: string;
    data: AddUser[]
}


export interface AddUser{
    First_name: string
    Last_name: string
    Phone: string
    Mobile: string
    Email: string
    Working_location: string
    Joining_date: Date
    role: number
    dob: Date
    gender: string
    current_address: string
    permanent_address: string
    reports_to: number
}
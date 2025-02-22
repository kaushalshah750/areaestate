export interface UsersResponse{
    err: boolean;
    errMessage: string;
    data: Users[]
}


export interface Users{
    Id: number
    First_name: string
    Last_name: string
    Phone: string
    Mobile: string
    Email: string
    Working_location: string
    Joining_date: Date
    Role_id: number
    Dob: Date
    Gender: string
    Current_Address: string
    Permanent_Address: string
    Reports_to: number
    Last_Login: Date
}
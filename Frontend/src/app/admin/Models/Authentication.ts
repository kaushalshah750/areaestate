import { Role } from "./Role";

export interface AuthenticationsResponse{
    err: boolean;
    errMessage: string;
    data: Authentication
}


export interface Authentication{
    Id: number
    Username: string
    Password: string
    First_name: string
    Last_name: string
    Role: Role
}
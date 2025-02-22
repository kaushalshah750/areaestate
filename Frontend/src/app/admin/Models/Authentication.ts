export interface AuthenticationsResponse{
    err: boolean;
    errMessage: string;
    data: Authentication
}


export interface Authentication{
    Username: string
    Password: string
}
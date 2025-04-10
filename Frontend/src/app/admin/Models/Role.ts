export interface RolesResponse{
    err: boolean;
    errMessage: string;
    data: Role[]
}


export interface Role{
    Id: number
    Name: string
}
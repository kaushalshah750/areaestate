export interface WorkingLocationsResponse{
    err: boolean;
    errMessage: string;
    data: WorkingLocation[]
}


export interface WorkingLocation{
    Id: string
    Location: string
}
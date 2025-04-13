import { Role } from "./Role"
import { WorkingLocation } from "./WorkingLocation"

export interface Employee {
    id: string
    username: string
    first_name: string
    last_name: string
    phone: string | null
    mobile: string | null
    email: string
    working_location_id: number | null
    working_location: WorkingLocation | null
    joining_date: string
    role_id: number | null
    roles: Role | null
    dob: string | null
    gender: string | null
    current_address: string | null
    permanent_address: string | null
    reports_to: string | null
    last_login: string | null
    created_on: string
    updated_on: string
}
import { Role } from "./Role";

export interface AuthenticationsResponse {
    access_token: string;
    expires_at: number;
    expires_in: number
    refresh_token: string
    token_type: string
    user: AuthenticationUser
}

export interface AuthenticationUserMetaData {
    dob: string;
    first_name: string;
    gender: string;
    joining_date: string;
    last_name: string;
    role_id: number;

}

export interface AuthenticationUser {
    aud: string;
    confirmed_at: string;
    created_at: string;
    email: string;
    email_confirmed_at: string;
    id: string;
    identities: any[];
    is_anonymous: boolean;
    last_sign_in_at: string;
    phone: string;
    role: string;
    updated_at: string;
    user_metadata: AuthenticationUserMetaData;
}


export interface Authentication {
    email: string
    password: string
    gotrue_meta_security: any
}
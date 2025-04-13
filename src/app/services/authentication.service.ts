import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Authentication, AuthenticationsResponse } from '../admin/Models/Authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'auth/v1/token'

  constructor(
    private authHttp: AuthService
  ) { }

  login(auth: Authentication) {
    return this.authHttp.post<AuthenticationsResponse>(`${this.url}?grant_type=password`, auth)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { supabase } from 'src/integration/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("sb-lcprulruuufucyvthzxx-auth-token")!).access_token}`,
        "Apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcHJ1bHJ1dXVmdWN5dnRoenh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjE5MzQsImV4cCI6MjA1OTU5NzkzNH0.ysb6wT7Eek2j97l0ELAYNysm0eAmr7UA34BtSdit9SM"
      },
    });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, data, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("sb-lcprulruuufucyvthzxx-auth-token")!).access_token}`,
        "Apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcHJ1bHJ1dXVmdWN5dnRoenh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjE5MzQsImV4cCI6MjA1OTU5NzkzNH0.ysb6wT7Eek2j97l0ELAYNysm0eAmr7UA34BtSdit9SM"
      }
    });
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, data, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("sb-lcprulruuufucyvthzxx-auth-token")!).access_token}`,
        "Apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcHJ1bHJ1dXVmdWN5dnRoenh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjE5MzQsImV4cCI6MjA1OTU5NzkzNH0.ysb6wT7Eek2j97l0ELAYNysm0eAmr7UA34BtSdit9SM"
      }
    });
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("sb-lcprulruuufucyvthzxx-auth-token")!).access_token}`,
        "Apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcHJ1bHJ1dXVmdWN5dnRoenh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjE5MzQsImV4cCI6MjA1OTU5NzkzNH0.ysb6wT7Eek2j97l0ELAYNysm0eAmr7UA34BtSdit9SM"
      }
    });
  }

}

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Role } from '../admin/Models/Role';
import { AddUsersResponse } from '../admin/Models/AddUser';
import { WorkingLocation } from '../admin/Models/WorkingLocation';
import { Employee } from '../admin/Models/Employee';
import { supabase } from 'src/integration/client';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'rest/v1/profiles'

  constructor(
    private authHttp: AuthService
  ) { }

  async getAllUsers() {
    return await supabase
      .from('profiles')
      .select(`
          *,
          roles:role_id (
            id,
            name
          ),
          working_location:working_location_id (
            id,
            location
          )
        `);

  }

  async getAllRole() {
    return await supabase
      .from('roles')
      .select('*');
  }

  async getAllWorkingLocation() {
    return await supabase
      .from('working_location')
      .select('*');
  }

  async getUserById(id: string) {
    return await supabase
      .from('profiles')
      .select(`
          *,
          roles:role_id (
            id,
            name
          ),
          working_location:working_location_id (
            id,
            location
          )
        `)
      .eq('id', id);
  }

  async createUser(user: any) {

    const { data, error } = await supabase.auth.signUp({
      email: user.Email,
      password: user.Password,
    });

    if (error) {
      console.error("Signup error:", error.message);
      return;
    }

    const userData = data.user;

    if (userData) {

      const { error: insertError } = await supabase.from('profiles').insert({
        id: userData.id,
        username: user.Username,
        first_name: user.First_name,
        last_name: user.Last_name,
        email: user.Email,
        phone: user.Phone,
        mobile: user.Mobile,
        joining_date: user.Joining_date,
        role_id: parseInt(user.Role_id),
        working_location_id: parseInt(user.Working_location),
        dob: user.Dob,
        gender: user.Gender,
        current_address: user.Current_Address,
        permanent_address: user.Permanent_Address,
        reports_to: user.Reports_to || null,
        created_on: new Date().toISOString(),
        updated_on: new Date().toISOString(),
        last_login: new Date().toISOString()
      });

      if (insertError) {
        console.error("Profile insert error:", insertError.message);
      }
      return true;
    }
    return false;

  }
}

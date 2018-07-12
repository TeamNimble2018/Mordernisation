import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile } from '../models/profile.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {

  constructor(private http:HttpClient) {}
  
  private profileUrl = '/user-portal/api/';

  public updateProfile(profile) {
    return this.http.put<Profile>(this.profileUrl, profile);
  }

}

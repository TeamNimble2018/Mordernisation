import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

 private users: User[];

  private getUserRestApi='/assets/data/user.json';
  private saveUserRestApi='';
  private updateUserRestApi='';
  private deleteUserRestApi='';


  constructor(private http: HttpClient) {
    //this.getUserIdObservable().subscribe(data => this.users = data);
  }
// API call from actual web service
    getUserIdObservable(): Observable<User []> {
      return this.http.get<User[]>(this.getUserRestApi);
    }
   
    public getUserIds(): User[] {
      return this.users;
    }

    public saveUser(User): void {

    }

    public updateUser(User): void {

    }

    public deleteUser(User): void {

    }

}

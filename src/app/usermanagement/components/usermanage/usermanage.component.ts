import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.css']
})
export class UsermanageComponent implements OnInit {

  private users : User[];

  constructor(private userService: UserService) { }

  public getUsers(): User []{
    return this.users;
  }

  ngOnInit() {
    this.userService.getUserIdObservable().subscribe(data => this.users = data);
    }

};

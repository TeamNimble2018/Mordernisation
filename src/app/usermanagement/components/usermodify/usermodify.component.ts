import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usermodify',
  templateUrl: './usermodify.component.html',
  styleUrls: ['./usermodify.component.css']
})
export class UsermodifyComponent implements OnInit {
  private sub: any;
  private user: User={userId: "",pool: "",avismed: "",name: ""};
  private users: User[];
  private userid: string;

  constructor(private route: ActivatedRoute, private userService: UserService) {
      console.log("ngOnInit start...")
    this.sub = this.route.params.subscribe(params => {
      this.userid = params['userid'];
      let that = this;
      this.userService.getUserIdObservable().subscribe(function (that, data) {
      this.users = data;
        //console.log("The users data---" + this.users);
        //console.log("The users data---" + that.userid);
        that.user = this.users.filter(function (obj) {
          //console.log("The users data---" + obj.userId);
          return obj.userId == that.userid;
        })[0];
        //console.log("The users data-----****" + that.user);

      }.bind(this, that));
    });
   }

  ngOnInit() {
  
  }

  onSave() {
    this.userService.saveUser(this.user);    
    console.log("onSave()");
    console.log(this.user);
  }

  onUpdate() {
    this.userService.updateUser(this.user);
    console.log("onUpdate()");
    console.log(this.user);
  }

  onDelete() {
    this.userService.deleteUser(this.user);
    console.log("onDelete()");
    console.log(this.user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

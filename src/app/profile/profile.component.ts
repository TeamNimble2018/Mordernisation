import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  profile: Profile = new Profile();

  constructor(private router: Router, private profileService: ProfileService) {

  }

  updateProfile(): void {
   
    console.log(JSON.stringify(this.profile));            
     
    this.profileService.updateProfile(this.profile)
        .subscribe( data => {
          alert("Profile updated successfully.");
        });

  };

}
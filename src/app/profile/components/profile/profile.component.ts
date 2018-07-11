import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import {SharedModule} from '../../../Shared/shared.module';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
	display='none';
  profile: Profile = new Profile();

  private count: number = 0;
	profil1 = new FormControl(false);profil2 = new FormControl(false);profil3 = new FormControl(false);
	profil4 = new FormControl(false);profil5 = new FormControl(false);

  constructor(private router: Router, private profileService: ProfileService, private sharedModule: SharedModule) {

  }

  changeValue(cId : string) {

	  if(cId=='Gestionnaire_Junior'){
	  if(!this.profil1.value == false){this.count--;}
	  else{this.count++;}
	  console.log(!this.profil1.value);
	  this.profil1 = new FormControl(!this.profil1.value);
	  }
	  if(cId=='Gestionnaire_Senior'){
	  if(!this.profil2.value == false){this.count--;}
	  else{this.count++;}
	  console.log(!this.profil2.value);
	  this.profil2 = new FormControl(!this.profil2.value);
	  }
	  if(cId=='Consultation'){
	  if(!this.profil3.value == false){this.count--;}
	  else{this.count++;}
	  console.log(!this.profil3.value);
	  this.profil3 = new FormControl(!this.profil3.value);
	  }
	  if(cId=='Gestionnaire'){
	  if(!this.profil4.value == false){this.count--;}
	  else{this.count++;}
	  console.log(!this.profil4.value);
	  this.profil4 = new FormControl(!this.profil4.value);
	  }
	  if(cId=='ConsultationIndividuelle'){
	  if(!this.profil5.value == false){this.count--;}
	  else{this.count++;}
	  console.log(!this.profil5.value);
	  this.profil5 = new FormControl(!this.profil5.value);
	  }
	  
	  if(this.count>1){
      $('.modal-body').text('you can not select more than one role..');
      $('#btnOpenPurchasePopup').trigger('click'); 	    
	  }
	  console.log(this.count);
	  console.log(JSON.stringify(this.profile));
  }


  updateProfile(): void {
  
    console.log(JSON.stringify(this.profile));            
    console.log(JSON.stringify(this.profile));          
    if(!this.profile.GestionnaireJunior  &&  !this.profile.GestionnaireSenior  &&  !this.profile.ConsultationCollective  &&  
	  !this.profile.Gestionnaire  &&  !this.profile.ConsultationIndividuelle  )
	  {
      $('.modal-body').text('Please select at least one check box..');
      $('#btnOpenPurchasePopup').trigger('click'); 	 
      return;
    } 
	  if(this.count>1){
      $('.modal-body').text('you can not select more than one role..');
      $('#btnOpenPurchasePopup').trigger('click'); 	 
	    return;
	  } 
    this.profileService.updateProfile(this.profile)
        .subscribe( data => {
          if(data) {
            this.sharedModule.setData(JSON.stringify(this.profile));
            $('.modal-body').html('Profile updated successfully.');
            $('#btnOpenPurchasePopup').trigger('click');
            console.log(this.sharedModule.getData());
        }
        else {
            console.log("Error while calling Rest service on Spring boot ");
        }
             
        });

  };

  openModal(){
   this.display="block"; 
   }
   onCloseHandled(){
       this.display='none'; 
   }

}
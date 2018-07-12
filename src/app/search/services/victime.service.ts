import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VictimeDetails } from '../models/victime-details-model';

@Injectable({
  providedIn: 'root'
})
export class VictimeService {
  private victims:VictimeDetails[]=[];
  constructor(private http:Http) {
    this.getVictime();
   }

  public getVictims():VictimeDetails[]{
    return this.victims;
  }

  public searchVictim(phNo:number,name:string):VictimeDetails{
    if(name!=null&&phNo!=null){
          let nameFiltered:VictimeDetails[]=this.victims.filter(function( victim ) {
            return victim.victimeName=== name;
          });
          nameFiltered=nameFiltered.length===0?null:nameFiltered;
          if(nameFiltered===null){
            return null
          }else{
            let victimResult:VictimeDetails[]= nameFiltered.filter(function( victim ) {
              return victim.policyHolderNumber=== phNo;
            });
            return victimResult.length===0?null:victimResult[0];
          }         
      }else if(phNo!=null){
          let phNoFiltered:VictimeDetails[]=this.victims.filter(function( victim ) {
            return victim.policyHolderNumber=== phNo;
          });
          return phNoFiltered.length===0?null:phNoFiltered[0];
      }
      else if(name!=null){
        let nameFiltered:VictimeDetails[]= this.victims.filter(function( victim ) {
            return victim.victimeName=== name;
          });
          return nameFiltered.length===0?null:nameFiltered[0];
      }else{
          return null;
        }
  }

  public getVictime(){
    this.victims.push(new VictimeDetails('victim',34545245,'Carl Jung',80,'deceased'));
    this.victims.push(new VictimeDetails('victim',53453534,'Jordan Peterson',50,'alive'));
    this.victims.push(new VictimeDetails('victim',64564564,'Karl Max',96,'deceased'));
    this.victims.push(new VictimeDetails('victim',21342341,'Gutam Buddha',59,'alive'));
}
}

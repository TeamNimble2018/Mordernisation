import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VictimePolicy } from '../models/victime-policy-model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policies:VictimePolicy[]=[];
  constructor() {this.getVictimePolicy(); }

  public getVictims():VictimePolicy[]{
    return this.policies;
  }

public getVictimePolicy(){
  this.policies.push(new VictimePolicy('policy',12343,'Xyz Policy',new Date("October 13, 1990"),34545245,"Matured"));
  this.policies.push(new VictimePolicy('policy',14533,'Abc Policy',new Date("January 13, 2010"),34545245,"Claimed"));
  this.policies.push(new VictimePolicy('policy',13467,'Efg Policy',new Date("February 13, 2009"),34545245,"Extented"));
  this.policies.push(new VictimePolicy('policy',17989,'Ijk Policy',new Date("March 13, 2001"),34545245,"Defaulter"));
  this.policies.push(new VictimePolicy('policy',16780,'Lmo Policy',new Date("December 13, 2014"),34545245,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',45646,'Nop Policy',new Date("November 13, 2011"),34545245,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',68785,'Wqr Policy',new Date("September 13, 2012"),34545245,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',76899,'Acd Policy',new Date("July 13, 1995"),34545245,"Matured"));
  this.policies.push(new VictimePolicy('policy',21345,'Zcc Policy',new Date("April 13, 2018"),34545245,"Incubate"));

  this.policies.push(new VictimePolicy('policy',12343,'Xyz Policy',new Date("October 13, 1990"),53453534,"Matured"));
  this.policies.push(new VictimePolicy('policy',14533,'Abc Policy',new Date("January 13, 2010"),53453534,"Claimed"));
  this.policies.push(new VictimePolicy('policy',13467,'Efg Policy',new Date("February 13, 2009"),53453534,"Extented"));
  this.policies.push(new VictimePolicy('policy',16780,'Lmo Policy',new Date("December 13, 2014"),53453534,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',45646,'Nop Policy',new Date("November 13, 2011"),53453534,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',68785,'Wqr Policy',new Date("September 13, 2012"),53453534,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',76899,'Acd Policy',new Date("July 13, 1995"),53453534,"Matured"));

  this.policies.push(new VictimePolicy('policy',16780,'Lmo Policy',new Date("December 13, 2014"),64564564,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',45646,'Nop Policy',new Date("November 13, 2011"),64564564,"Ongoing"));
  this.policies.push(new VictimePolicy('policy',68785,'Wqr Policy',new Date("September 13, 2012"),64564564,"Ongoing"));
}

public searchPolicy(phNo:number,effectiveDt:Date,policyNo:number,status:string[]):VictimePolicy[]{
  let policyHolderNumberFiltered:VictimePolicy[]=this.policies.filter(function( policy ) {
    return policy.policyHolderNumber=== phNo;
  });
  if(policyHolderNumberFiltered.length!=0){
  if(effectiveDt!=null&&policyNo!=null&& status!=null){
        let effectiveDateFiltered:VictimePolicy[]=policyHolderNumberFiltered.filter(function( policy ) {
          return policy.effectiveDate>effectiveDt;
        });
        let policyNumFiltered:VictimePolicy[]= effectiveDateFiltered.length!==0?effectiveDateFiltered.filter(function( policy ) {
          return policy.policyNumber===policyNo;
        }):[];
        let statusFiltered:VictimePolicy[]= policyNumFiltered.length!==0?policyNumFiltered.filter(function(obj){ return status.indexOf(obj.status)>-1?obj.status:null}):[];
        return statusFiltered.length===0?null:statusFiltered;
  }else if(effectiveDt!=null&&policyNo!=null){
        let effectiveDateFiltered:VictimePolicy[]= policyHolderNumberFiltered.filter(function( policy ) {
          return policy.effectiveDate>effectiveDt;
        });
        let policyNumFiltered:VictimePolicy[]=effectiveDateFiltered.length!==0?effectiveDateFiltered.filter(function( policy ) {
          return policy.policyNumber===policyNo;
        }):[];
        return policyNumFiltered.length===0?null:policyNumFiltered;
  }else if(policyNo!=null&& status!=null){
        let policyNumFiltered:VictimePolicy[]=policyHolderNumberFiltered.filter(function( policy ) {
          return policy.policyNumber===policyNo;
        });
        let statusFiltered:VictimePolicy[]= policyNumFiltered.length!==0?policyNumFiltered.filter(function(obj){ return status.indexOf(obj.status)>-1?obj.status:null}):[];
        return statusFiltered.length===0?null:statusFiltered;
  }else if(effectiveDt!=null&& status!=null){
        let effectiveDateFiltered:VictimePolicy[]= policyHolderNumberFiltered.filter(function( policy ) {
          return policy.effectiveDate>effectiveDt;
        });
        let statusFiltered:VictimePolicy[]= effectiveDateFiltered.length!==0?effectiveDateFiltered.filter(function(obj){ return status.indexOf(obj.status)>-1?obj.status:null}):[];
        return statusFiltered.length===0?null:statusFiltered;
  }else if(effectiveDt!=null){
        let effectiveDateFiltered:VictimePolicy[]=policyHolderNumberFiltered.filter(function( policy ) {
          return policy.effectiveDate>effectiveDt;
        });
        return effectiveDateFiltered.length===0?null:effectiveDateFiltered;
  }else if(policyNo!=null){
        let policyNumFiltered:VictimePolicy[]=policyHolderNumberFiltered.filter(function( policy ) {
          return policy.policyNumber===policyNo;
        });
        return policyNumFiltered.length===0?null:policyNumFiltered;
   }else if(status!=null){
        let statusFiltered:VictimePolicy[]= policyHolderNumberFiltered.filter(function(obj){ return status.indexOf(obj.status)>-1?obj.status:null})
        return statusFiltered.length===0?null:statusFiltered;
   }else{
        return policyHolderNumberFiltered.length===0?null:policyHolderNumberFiltered;
   }}else{
        return null;
   }
}
}

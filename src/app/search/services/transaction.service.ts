import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VictimeTransaction } from '../models/victime-transaction-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions:VictimeTransaction[]=[];
  constructor() {this.getVictimeTransaction(); }

public getVictimeTransaction(){
    this.transactions.push(new VictimeTransaction('Transaction',34131,new Date("October 13, 1995"),'Loan','Closed',12343,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34132,new Date("February 13, 2001"),'Credit','Open',12343,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34133,new Date("September 13, 2002"),'Debit','Closed',12343,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34134,new Date("January 13, 2013"),'Loan','Closed',14533,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34135,new Date("January 13, 2016"),'Credit','Open',14533,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34136,new Date("October 23, 2010"),'Loan','Closed',13467,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34137,new Date("December 9, 2005"),'Debit','Closed',17989,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34138,new Date("January 13, 2014"),'Credit','Open',16780,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34139,new Date("June 13, 2016"),'Debit','Closed',45646,34545245));
    this.transactions.push(new VictimeTransaction('Transaction',34140,new Date("July 13, 2015"),'Debit','Closed',68785,34545245));

    this.transactions.push(new VictimeTransaction('Transaction',34141,new Date("January 13, 2015"),'Loan','Closed',16780,64564564));
    this.transactions.push(new VictimeTransaction('Transaction',34142,new Date("February 13, 2016"),'Loan','Closed',16780,64564564));
    this.transactions.push(new VictimeTransaction('Transaction',34143,new Date("March 13, 2012"),'Loan','Closed',45646,64564564));
    this.transactions.push(new VictimeTransaction('Transaction',34144,new Date("April 13, 2017"),'Loan','Closed',45646,64564564));
    this.transactions.push(new VictimeTransaction('Transaction',34145,new Date("May 13, 2018"),'Loan','Closed',68785,64564564));

  }

public searchTransactions(policyNo:number,phNo:number):VictimeTransaction[]{
  let policyHolderNumberFiltered:VictimeTransaction[]=this.transactions.filter(function( transaction ) {
    return transaction.policyHolderNumber=== phNo;
  });
  if(policyHolderNumberFiltered.length>0){
   if(policyNo!==null&&phNo!==null){
    let policyNoFiltered= this.transactions.filter(function( transaction ) {
      return transaction.policyNumber=== policyNo;
    });
      return policyNoFiltered.length>0?policyNoFiltered:null
   }else {
      return policyHolderNumberFiltered
   }
  }else{
      return null;
  }
  }
}

import { VictimeTransaction } from '../models/victime-transaction-model';

export class VictimePolicy{
    type : string;
    policyNumber : number;
    policyName : string;
    effectiveDate : Date;
    effectiveDateString : string;
    policyHolderNumber : number;
    victimTransaction:VictimeTransaction[];
    status: string;
    
    constructor(type : string,
        policyNumber : number,
        policyName : string,
        effectiveDate : Date,
        policyHolderNumber : number,
        status: string){
     this.type=type;
     this.policyNumber=policyNumber;
     this.policyName=policyName;
     this.effectiveDate=effectiveDate;
     this.policyHolderNumber=policyHolderNumber;
     this.status=status;
    }
}                        
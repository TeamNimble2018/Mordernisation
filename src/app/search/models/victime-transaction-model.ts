export class VictimeTransaction{
    type : string;
    transactionNumber : number;
    transactionDate : Date;
    transactionDateString : string;
    transactionType: string;
    status: string;
    policyNumber : number;
    policyHolderNumber : number;
    
    constructor(type : string,
        transactionNumber : number,
        transactionDate : Date,
        transactionType: string,
        status: string,
        policyNumber : number,
        policyHolderNumber : number      
    ){
     this.type=type;
     this.transactionNumber=transactionNumber;
     this.transactionDate=transactionDate;
     this.transactionType=transactionType;
     this.status=status;
     this.policyHolderNumber=policyHolderNumber; 
     this.policyNumber=policyNumber
    }
}  
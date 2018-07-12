export class VictimeDetails{
    type : string;
    policyHolderNumber : number;
    victimeName : string;
    age: number;
    status: string;
    

    constructor(   type : string,
        policyHolderNumber : number,
        victimeName : string,
        age: number,
        status: string){
     this.type=type;
     this.policyHolderNumber=policyHolderNumber;
     this.victimeName=victimeName;
     this.age= age;
     this.status=status;
    }
}                        
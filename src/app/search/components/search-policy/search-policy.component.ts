import { Component, OnInit, ViewChild  } from '@angular/core';
import { PopupModalsComponent } from '../popup-modals/popup-modals.component';
import { VictimeService } from '../../services/victime.service';
import { PolicyService } from '../../services/policy.service';
import { TransactionService } from '../../services/transaction.service';
import { NgForm } from '@angular/forms';
import { VictimeDetails } from '../../models/victime-details-model';
import { VictimePolicy } from '../../models/victime-policy-model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { VictimeTransaction } from '../../models/victime-transaction-model';

@Component({
  selector: 'app-search-policy',
  templateUrl: './search-policy.component.html',
  styleUrls: ['./search-policy.component.css']
})
export class SearchPolicyComponent implements OnInit {
  @ViewChild(PopupModalsComponent ) popUpComponent: PopupModalsComponent; 
  victimDetails:VictimeDetails=null;
  victimPolicy:VictimePolicy[]=null;
  victimTransaction:VictimeTransaction[]=null
  effectiveDate:Date=null;
  claimed:boolean=false;
  defaulter:boolean=false;
  extented:boolean=false;
  incubate:boolean=false;
  matured:boolean=false;
  ongoing:boolean=false;
  status:string[]=[];
  


  constructor( private victimeService:VictimeService,
    private policyService:PolicyService,
    private transactionService:TransactionService) { }
    
    @ViewChild('searchForm') searchForm:NgForm;
  ngOnInit() {
  }

  showData(content):void{
    this.victimPolicy=null;
    let victimName=this.searchForm.value.victim.trim().length>0?this.searchForm.value.victim.trim():null;
    this.victimDetails=this.victimeService.searchVictim(this.searchForm.value.policyHolNo,victimName);
    if(this.victimDetails!==null&&this.searchForm.value.policy===true){
      this.status=[];
      for(let item in this.searchForm.value){
         if(this.searchForm.value[item]===true &&item!=="policy" &&item!=="transaction"){
            this.status.push(item.charAt(0).toUpperCase()+item.slice(1));
         }
      }
      this.status=this.status.length>0?this.status:null;
      let policyNo=this.searchForm.value.policyNo===""?null:this.searchForm.value.policyNo;
      this.victimPolicy=this.policyService.searchPolicy(this.searchForm.value.policyHolNo,this.effectiveDate,
      policyNo,this.status);
      let policy:any;
      for(policy in this.victimPolicy){
        this.victimPolicy[policy].effectiveDateString=this.formatDate(this.victimPolicy[policy].effectiveDate);
        if(this.searchForm.value.transaction===true){
          this.victimPolicy[policy].victimTransaction=this.transactionService.searchTransactions(this.victimPolicy[policy].policyNumber,
            this.searchForm.value.policyHolNo );
            let victimTrans:any;
            for(victimTrans in this.victimPolicy[policy].victimTransaction){
              this.victimPolicy[policy].victimTransaction[victimTrans].transactionDateString=this.formatDate(this.victimPolicy[policy].victimTransaction[victimTrans].transactionDate);
                          }
        }
      }
    }
    if(this.victimDetails!==null&&this.searchForm.value.policy!=true&&this.searchForm.value.transaction===true){
      let policyNo=this.searchForm.value.policyNo===""?null:this.searchForm.value.policyNo;
      this.victimTransaction=this.transactionService.searchTransactions(policyNo,
        this.searchForm.value.policyHolNo );
        let victimTrans:any;
        for(victimTrans in this.victimTransaction){
          console.log(victimTrans);
          this.victimTransaction[victimTrans].transactionDateString=this.formatDate(this.victimTransaction[victimTrans].transactionDate);
                      }
    }
    this.popUpComponent.openLg(content);
  }

 formatDate(date:Date) {
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  setEffectiveDate(dateModified:NgbDateStruct){
      this.effectiveDate=new Date(dateModified.year,dateModified.month,dateModified.day);
  }
}

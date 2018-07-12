import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';
import { DatePickerComponent } from './search/components/date-picker/date-picker.component';
import { FormsModule } from "@angular/forms";
import { PopupModalsComponent } from './search/components/popup-modals/popup-modals.component'
import { VictimeService } from './search/services/victime.service';
import { PolicyService } from './search/services/policy.service';
import { TransactionService } from './search/services/transaction.service';
import { BtsAccordianComponent } from './search/components/bts-accordian/bts-accordian.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPolicyComponent,
    DatePickerComponent,
    PopupModalsComponent,
    BtsAccordianComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(), FormsModule,HttpModule
  ],
  providers: [VictimeService,PolicyService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

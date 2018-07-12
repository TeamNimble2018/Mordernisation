import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import {ProfileService} from './profile/services/profile.service';
import {SharedModule} from './Shared/services/shared.module';
import { UserService } from './usermanagement/services/user.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';
import { DatePickerComponent } from './search/components/date-picker/date-picker.component';
import { PopupModalsComponent } from './search/components/popup-modals/popup-modals.component'
import { VictimeService } from './search/services/victime.service';
import { PolicyService } from './search/services/policy.service';
import { TransactionService } from './search/services/transaction.service';
import { BtsAccordianComponent } from './search/components/bts-accordian/bts-accordian.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DatePickerComponent,
    PopupModalsComponent,
    BtsAccordianComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [ProfileService,SharedModule,UserService,VictimeService,PolicyService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule {}

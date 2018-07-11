import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import {ProfileService} from './profile/services/profile.service';
import {SharedModule} from './Shared/services/shared.module';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';
import { UserService } from './usermanagement/services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchPolicyComponent,
    userprofile,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProfileService,SharedModule,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

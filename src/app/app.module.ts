import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import {ProfileService} from './profile/services/profile.service';
import {SharedModule} from './Shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPolicyComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService,SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

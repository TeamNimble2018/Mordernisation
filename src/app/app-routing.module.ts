import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsermanageComponent } from './usermanagement/components/usermanage/usermanage.component';
import { UsermodifyComponent } from './usermanagement/components/usermodify/usermodify.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { SearchPolicyComponent } from './search/components/search-policy/search-policy.component';

const routes: Routes = [
    { path: 'user', component: UsermanageComponent},
    {path: 'user/edit/:userid', component: UsermodifyComponent},
    {path: '', component: HomeComponent},
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, UsermanageComponent, UsermodifyComponent, FooterComponent, HeaderComponent, ProfileComponent, SearchPolicyComponent ]
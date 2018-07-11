import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermanageComponent } from './usermanagement/components/usermanage/usermanage.component';
import { UsermodifyComponent } from './usermanagement/components/usermodify/usermodify.component';

const routes: Routes = [
    { path: 'user', component: UsermanageComponent},
    {path: 'user/edit/:userid', component: UsermodifyComponent},
    {path: '', component: UsermanageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ UsermanageComponent, UsermodifyComponent ]
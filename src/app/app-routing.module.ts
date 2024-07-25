import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { EditpageComponent } from './editpage/editpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LogincomponentComponent },
  { path: 'editassociate/:cust_id', component: EditpageComponent },
  { path: 'dashboard', component: DashboardComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

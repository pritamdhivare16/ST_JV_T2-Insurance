import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {component :  RegistrationComponent,path:"registration"},
  {component : LoginComponent,path:"login"},
  {component : InsuranceComponent, path:"insurance"},
  {component: ReportComponent, path:"report"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

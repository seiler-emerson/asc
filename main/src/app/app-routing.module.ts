import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageAdminComponent } from './components/Admin/homepage-admin/homepage-admin.component';

import { MainPageComponent } from './components/Shared/main-page/main-page.component';
import { HomepagePatientComponent } from './components/Patient/homepage-patient/homepage-patient.component';
import { LoginPatientComponent } from './components/Patient/login-patient/login-patient.component';
import { PatientProfileComponent } from './components/Patient/patient-profile/patient-profile.component';
import { RegisterPatientComponent } from './components/Patient/register-patient/register-patient.component';
import { ProfessionalProfileComponent } from './components/Professional/professional-profile/professional-profile.component';
import { ProfessionalSearchComponent } from './components/Professional/professional-search/professional-search.component';
import { RegisterProfessionalComponent } from './components/Admin/CRUD PROFESSIONAL/register-professional/register-professional.component';
import { RouterNotFoundComponent } from './components/Shared/router-not-found/router-not-found.component';
import { HomepageProfessionalComponent } from './components/Professional/homepage-professional/homepage-professional.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { TeamComponent } from './components/Team/team/team.component';
import { SecurityService } from './services/security.service';
import { LoginProfessionalComponent } from './components/Professional/login-professional/login-professional.component';
import { EditProfessionalComponent } from './components/Professional/edit-professional/edit-professional.component';

const routes: Routes = [
  {path: '', component:MainPageComponent},
  {path: 'login-patient', component: LoginPatientComponent},
  {path: 'register-patient', component: RegisterPatientComponent},
  {path: 'home-patient', component: HomepagePatientComponent, canActivate:[SecurityService]},
  {path: 'patient-profile', component: PatientProfileComponent, canActivate:[SecurityService]},
  {path: 'login-professional', component: LoginProfessionalComponent},
  {path: 'register-professional', component: RegisterProfessionalComponent},
  {path: 'professional-profile', component: ProfessionalProfileComponent, canActivate:[SecurityService]},
  {path: 'home-professional', component: HomepageProfessionalComponent},
  {path: 'edit-professional', component: EditProfessionalComponent},

  // , canActivate:[SecurityService]
  {path: 'login-admin', component: LoginAdminComponent},
  {path: 'home-admin', component: HomepageAdminComponent, canActivate:[SecurityService]},
  {path: 'search/:searchProfessional', component: ProfessionalSearchComponent, canActivate:[SecurityService]},
  // {path: '', redirectTo: '/home, pathMatch:'full'},
  // {path: '**', component:RouterNotFoundComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

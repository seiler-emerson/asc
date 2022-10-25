import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';


import { MainPageComponent } from './components/Shared/main-page/main-page.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { SecurityService } from './services/security.service';
import { HomepageAdminComponent } from './components/Admin/homepage-admin/homepage-admin.component';
import { CarouselModule } from 'primeng/carousel';
import { PrimeIcons } from 'primeng/api';
import { RatingModule } from 'ng-starrating';
import { DialogModule } from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

import { ButtonModule } from 'primeng/button';



import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterNotFoundComponent } from './components/Shared/router-not-found/router-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalProfileComponent } from './components/Professional/professional-profile/professional-profile.component';
import { LoginPatientComponent } from './components/Patient/login-patient/login-patient.component';
import { HomepagePatientComponent } from './components/Patient/homepage-patient/homepage-patient.component';
import { RegisterPatientComponent } from './components/Patient/register-patient/register-patient.component';
import { AppointmentFormComponent } from './components/Patient/appointment-form/appointment-form.component';
import { SearchProfessionalComponent } from './components/Professional/search-professional/search-professional.component';
import { ProfessionalSearchComponent } from './components/Professional/professional-search/professional-search.component';
import { AppointmentTableComponent } from './components/Patient/appointment-table/appointment-table.component';
import { AddAppointmentModalComponent } from './components/Patient/add-appointment-modal/add-appointment-modal.component';
import { PatientProfileComponent } from './components/Patient/patient-profile/patient-profile.component';
import { AddAppointmentBtnComponent } from './components/Patient/add-appointment-btn/add-appointment-btn.component';
import { RegisterProfessionalComponent } from './components/Admin/CRUD PROFESSIONAL/register-professional/register-professional.component';
import { RegisterAdmimComponent } from './components/Admin/register-admim/register-admim.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { HomepageProfessionalComponent } from './components/Professional/homepage-professional/homepage-professional.component';
import { ProfessionalCalendarComponent } from './components/Professional/professional-calendar/professional-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TestComponent } from './components/Professional/test/test.component';
import { RegisterPatientFormComponent } from './components/Patient/register-patient-form/register-patient-form.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { TeamComponent } from './components/Team/team/team.component';
import { TechnologiesPrototypingComponent } from './components/Technologies/technologies-prototyping/technologies-prototyping.component';
import { TechnologiesFrontEndComponent } from './components/Technologies/technologies-front-end/technologies-front-end.component';
import { TechnologiesBackEndComponent } from './components/Technologies/technologies-back-end/technologies-back-end.component';
import { TechnologiesIdeComponent } from './components/Technologies/technologies-ide/technologies-ide.component';
import { TechnologiesDatabaseComponent } from './components/Technologies/technologies-database/technologies-database.component';
import { TechnologiesDocumentationComponent } from './components/Technologies/technologies-documentation/technologies-documentation.component';
import { TechnologiesVersioningComponent } from './components/Technologies/technologies-versioning/technologies-versioning.component';
import { TechnologiesManagementComponent } from './components/Technologies/technologies-management/technologies-management.component';
import { TechnologiesSectionComponent } from './components/Shared/technologies-section/technologies-section.component';
import { VideoComponent } from './components/Shared/video/video.component';
import { LoginProfessionalComponent } from './components/Professional/login-professional/login-professional.component';
import { EditProfessionalComponent } from './components/Professional/edit-professional/edit-professional.component';
import { AdminEditProfessionalComponent } from './components/Admin/CRUD PROFESSIONAL/admin-edit-professional/admin-edit-professional.component';
import { EditShiftComponent } from './components/Professional/edit-shift/edit-shift.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPatientComponent,
    NavbarComponent,
    RegisterPatientComponent,
    HomepagePatientComponent,
    RegisterAdmimComponent,
    HomepageAdminComponent,
    RegisterProfessionalComponent,
    FooterComponent,
    AddAppointmentBtnComponent,
    PatientProfileComponent,
    AddAppointmentModalComponent,
    AppointmentTableComponent,
    ProfessionalSearchComponent,
    SearchProfessionalComponent,
    AppointmentFormComponent,
    RouterNotFoundComponent,
    ProfessionalProfileComponent,
    HomepageProfessionalComponent,
    ProfessionalCalendarComponent,
    TestComponent,
    RegisterPatientFormComponent,
    LoginAdminComponent,
    TeamComponent,
    TechnologiesPrototypingComponent,
    TechnologiesFrontEndComponent,
    TechnologiesBackEndComponent,
    TechnologiesIdeComponent,
    TechnologiesDatabaseComponent,
    TechnologiesDocumentationComponent,
    TechnologiesVersioningComponent,
    TechnologiesManagementComponent,
    TechnologiesSectionComponent,
    VideoComponent,
    LoginProfessionalComponent,
    EditProfessionalComponent,
    AdminEditProfessionalComponent,
    EditShiftComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    RatingModule,
    DialogModule,
    ConfirmDialogModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    StepsModule,
    ToastModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ButtonModule
    

  ],
  providers: [SecurityService],
  bootstrap: [AppComponent],
})
export class AppModule { }
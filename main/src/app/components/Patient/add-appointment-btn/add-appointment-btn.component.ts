import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { Appointments } from 'src/app/models/appointment.model';
import { LoginPatient } from 'src/app/models/loginPatient';
import { medicalModal } from 'src/app/models/medicalModal';
import { RespondeLogin } from 'src/app/models/RespondeLogin';
import { AppointmentService } from 'src/app/services/appointment.service';
import Validation from 'src/app/utils/validation';


@Component({
  selector: 'app-add-appointment-btn',
  templateUrl: './add-appointment-btn.component.html',
  styleUrls: ['./add-appointment-btn.component.css']
})
export class AddAppointmentBtnComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  Appointments!: any;
  patientId!: number;
  medicalId!:number;
  patientName!:any;
  medicalName!:any;
  dateOpen!:string;
  dateClosed!:string;
  description!: string;
  priority!: string;
  status!: string;
  public medicals!:any[];


  constructor(private appointmentService: AppointmentService,private formBuilder: FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.Appointments = {};
    console.log(this.getAll());
    this.form = this.formBuilder.group(
      {
        patient: ['', [Validators.required]],
        cpf: ['', [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]],
        description: ['', [Validators.required]],
        medical: ['', [Validators.requiredTrue]],
        dateOpen: ['', [Validators.pattern("(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})")]],
        priority: ['', [Validators.required]],

      },
    );
    console.log(this.form);
  }

  createAppointment() {
    this.Appointments.doctor = { id: this.medicalId }
    this.Appointments.patient = { id: this.patientId }
    this.appointmentService
      .create(this.Appointments)
      .pipe(
        catchError((error) => {
          let appointmentList: Array<any> = new Array();
          appointmentList.push(
            {
              id: 1,
              date_appointment: "02/10/2022 19:13",
              anamnesis: "Cefaleia leve",
              prescription: "Paracetamol, se dor ou febre",
              certificate: "n/h",
              forwarding: "n/h",
              medicalRelease: "Released",
              patient: {
                id: 1,
                name: "Sheldon Cooper",
                cpf: "316.094.990-77",
                nameMother: "Carla Cooper",
                nameFather: "Jose Cooper",
                genre: "M",
                birth: "1995-02-01",
                streetName: "Rua Adolfo Konder",
                numberHome: 1253,
                city: "Navegantes",
                state: "SC",
                country: "Brasil"
              },
              doctor: {
                id: 1,
                name: "Carla Maria Moraes",
                cpf: "528.220.220-46",
                nameMother: "Julia Moraes",
                nameFather: "Lucas Moraes",
                genre: "Female",
                birth: "1986-09-14",
                streetName: "Rua Conselheir",
                numberHome: 3476,
                district: "Rocio Fechado",
                city: "Londrina",
                state: "Parana",
                country: "Brasil",
                registerNumber: "62445561-0",
                registerState: "PR",
                specialty: "Obstetra"
              }
            },
          );
          this.router.navigateByUrl("appointments")
          return of(appointmentList);
        })
      )
      .subscribe((response: any) => {
        this.appointmentService.appointmentList.push(response);
      });
    this.clearInputs();
    this.router.navigateByUrl("appointments")
  }


  getAll(): Observable<medicalModal[]>{
    const url = AppConstants.medicals;
    return this.http.get<medicalModal[]>(url);
    }


  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    console.log(this.medicals);
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {


        return this.http.post<Appointments>(
          AppConstants.baseAppointments, Appointments
          );

      }
      return console.log("Não!")
    }

    clearInputs() {
      this.patientName = "",
  this.medicalName= "",
  this.dateOpen= "";
  this.description = "",
  this.priority = "",
  this.status = "";
    }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../app-constants';
import { Appointments } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl: any = AppConstants.baseAppointments;
  url: any = AppConstants.baseServer;


  indexUpdateDoctor!: number;

  appointmentList!: Array<any>;
  appointment!: any;

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<any> {

    return this.http.get<any>(this.baseUrl);
  }


  getById(id: any): Observable<any> {

    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(appointment: any): Observable<any> {

    return this.http.post<any>(this.baseUrl, appointment);
  }

  update(appointment: any): Observable<any> {

    return this.http.put<any>(this.baseUrl + '/' + appointment.id, appointment);
  }

  delete(appointment: any): Observable<any> {

    return this.http.delete<any>(this.baseUrl + '/' + appointment.id);
  }

  getByPatientId(id: any): Observable<any> {

    return this.http.get<any>(this.url + '/patient/' + id);
  }

  getByMedicalId(id: any): Observable<any> {

    return this.http.get<any>(this.url + '/medicals/' + id);
  }

}

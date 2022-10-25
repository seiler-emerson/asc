import { Injectable } from '@angular/core';
import { Professionals } from '../models/professionals.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';


@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  apiUrl: any = AppConstants.medicals;
  doctorList!: Array<any>;
  doctor!: any;

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Professionals[]>{
  //   const url = this.baseUrl + '/medicals';
  //   return this.httpClient.get<Professionals[]>(url);
  //   }

    getAll(): Observable<any> {

      return this.http.get<any>(this.apiUrl);
    }

    getById(doctor: any): Observable<any> {

      return this.http.get<any>(this.apiUrl + '/' + doctor.id);
    }

    create(doctor: any): Observable<any> {

      return this.http.post<any>(this.apiUrl, doctor);
    }

    update(doctor: any): Observable<any> {

      return this.http.put<any>(this.apiUrl + '/' + doctor.id, doctor);
    }

    delete(doctor: any): Observable<any> {

      return this.http.delete<any>(this.apiUrl + '/' + doctor.id);
    }
}

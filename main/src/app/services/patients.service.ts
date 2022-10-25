import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patients } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl: String = environment.baseUrl;

  private readonly PATIENT_URL = this.baseUrl + '/patients';
  
  constructor(private httpClient: HttpClient) { }

  getAllPatients():Observable<Patients[]>{
    const url = this.baseUrl + '/patients';
    return this.httpClient.get<Patients[]>(url);
    }

  save(record: Patients){
    return this.httpClient.post<Patients>(this.PATIENT_URL, record);
  }

  
}

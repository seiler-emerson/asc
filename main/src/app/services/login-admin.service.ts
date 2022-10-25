import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { RespondeLogin } from '../models/RespondeLogin';
import { LoginAdmin } from '../models/loginAdmin';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  constructor(private http: HttpClient) { }

  loginJTW(usuario: { username: any; password?: string; }) {
    return this.http.post(AppConstants.baseLoginPatient, JSON.stringify(usuario)).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
      localStorage.setItem("token", token);
      console.log("Token " + localStorage.getItem(token))
    },
      error => {
        console.error("Auth error")
      }
    );
  }

  public loginAdmin(LoginAdmin: LoginAdmin): Observable<RespondeLogin> {
    return this.http.post<RespondeLogin>(
      AppConstants.baseAdmin, LoginAdmin
    );
  }
}

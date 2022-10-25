import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { LoginPatient } from '../models/loginPatient';
import { Observable, observable } from 'rxjs';
import { RespondeLogin } from '../models/RespondeLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  // loginJTW(usuario: { email: any; password?: string; }){
  //   return this.http.post(AppConstants.baseLoginPatient, JSON.stringify(usuario)).subscribe(data =>{
  //     // retorno http
  //     var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
  //     // no spring no arquivo JWTTokenAuth
  //     // isso habilita a resposta para porta diferente do angular
  //     // response.addheader("Acess-Control-Allow-Origin", "*")

  //     localStorage.setItem("token", token);
  //     console.log("Token " + localStorage.getItem(token))
  //   },
  //     error => {
  //       console.error("Auth error")
  //     }
  //   );


  // }

  public loginPatient(LoginPatient: LoginPatient): Observable<RespondeLogin> {
    return this.http.post<RespondeLogin>(
      AppConstants.baseLoginPatient, LoginPatient
      );

  }
}

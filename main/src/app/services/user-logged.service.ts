import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  apiUrl: string = 'https://aesculapius-scheduling-center.herokuapp.com/login';
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.get<any>(this.apiUrl + '/login/' + username + "/" + password);
  }
}

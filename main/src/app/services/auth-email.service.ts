import { Injectable } from '@angular/core';
import { RespondeLogin } from '../models/RespondeLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthEmailService {
  public loginResponse!: RespondeLogin;
  constructor() { }

  public clear():void{
    // this.loginResponse = undefined;
  }

  public isAuth():boolean{
    return Boolean(this.loginResponse && this.loginResponse.jtw);
  }
}

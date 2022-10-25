import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdmin } from 'src/app/models/loginAdmin';


import { AuthService } from 'src/app/services/auth.service';
import { LoginAdminService } from 'src/app/services/login-admin.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  formLoginAdmin: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  username!: string
  password!: string
  errorMessage = 'Invalid Credentials';
  successMessage!: string;
  invalidLogin = false;
  loginSuccess = false;

  submittedForm = false;
  public LoginAdmin!: LoginAdmin;

  admin = { username: '', password: '' };

  constructor(private formBuilder: FormBuilder, private router: Router, private securityService: SecurityService,
    private authenticationService: AuthService, private loginService : LoginAdminService) { }

  ngOnInit(): void {
    this.LoginAdmin = new LoginAdmin();
    this.formLoginAdmin = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
    console.warn(this.formLoginAdmin);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLoginAdmin.controls;
  }

  onSubmit(): void {
    this.submittedForm = true;
    if (this.formLoginAdmin.invalid) {
      return;
    }
    console.log(JSON.stringify(this.formLoginAdmin, null, 2));
  }

  login(): void{
    if(!this.formLoginAdmin.invalid ){
      this.loginService.loginAdmin(this.LoginAdmin).subscribe(
        (date) => {
          this.securityService.logged = true;
          this.router.navigateByUrl("home-admin");

        },
        (error) => {console.log(error)}
      )
    }
  }
}
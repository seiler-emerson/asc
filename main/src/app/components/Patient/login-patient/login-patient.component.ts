import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validation';
import { SecurityService } from 'src/app/services/security.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { LoginPatient } from 'src/app/models/loginPatient';

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})
export class LoginPatientComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  public LoginPatient!: LoginPatient;

  user_ = { login: '', password: '' };

  constructor(private loginService: LoginServiceService,
    private formBuilder: FormBuilder,
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.LoginPatient = new LoginPatient();
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      },
    );
    // console.log(this.form);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  login(): void {
    if (!this.form.invalid) {
      this.loginService.loginPatient(this.LoginPatient).subscribe(
        (date) => {
          this.security.logged = true;
          this.router.navigateByUrl("home-patient");

        },
        (error) => { console.log(error) }
      )
    }
  }
}

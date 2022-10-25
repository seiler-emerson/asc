import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';
import { ConfirmedValidator } from '../../Shared/confirmed.validator';

@Component({
  selector: 'app-register-patient-form',
  templateUrl: './register-patient-form.component.html',
  styleUrls: ['./register-patient-form.component.css'],

})
export class RegisterPatientFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private ps: PatientsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        cpf: ['', [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]],
        phoneNumber: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
        sex: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        // password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(20)],
        // confirmPassword: ['', Validators.required, Validators.minLength(8), Validators.maxLength(20)],
        // professional: ['', [Validators.requiredTrue]],
        birthdate: ['', [Validators.pattern("(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})")]],
        motherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        fatherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        street: ['', [Validators.required]],
        numberAddress: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],


      },
    );
    console.log(this.form);
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  get f() {
    return this.form.controls;
  }

  register() {
    this.submitted = true;
    console.log(this.form.value);
    this.ps.save(this.form.value).subscribe(result => console.log(result));
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}

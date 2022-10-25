import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-add-appointment-modal',
  templateUrl: './add-appointment-modal.component.html',
  styleUrls: ['./add-appointment-modal.component.css']
})
export class AddAppointmentModalComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    cpf: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    professional: new FormControl(''),
    appointmentDate: new FormControl(''),
    appointmentTime: new FormControl(''),

  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        cpf: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[- +()0-9]+')]],
        // Validators.pattern(new RegExp("[0-9 ]{12}"))
        email: ['', [Validators.required, Validators.email]],
        professional: ['', [Validators.required]],
        appointmentDate: ['', [Validators.pattern(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/)]],
        appointmentTime: ['', [Validators.pattern(/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/)]],
      },
    );
    console.log(this.form);
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;

    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

}

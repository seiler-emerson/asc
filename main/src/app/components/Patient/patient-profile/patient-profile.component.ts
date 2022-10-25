import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models/patients.model';
import { Professionals } from 'src/app/models/professionals.model';
import { PatientsService } from 'src/app/services/patients.service';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validation';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patients: Patients[] = [];

  formSettings: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    cpf: new FormControl(''),
    phoneNumber: new FormControl(''),
    sex: new FormControl(''),
    birthdate: new FormControl(''),
    email: new FormControl(''),
    motherName: new FormControl(''),
    fatherName: new FormControl(''),
    cep: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    numberAddress: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });
  submitted = false;

  constructor(private ps: PatientsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.findAll();
    this.formSettings = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        cpf: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[- +()0-9]+')]],
        sex: ['', [Validators.required]],
        birthdate: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        motherName: ['', [Validators.required]],
        fatherName: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        numberAddress: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
      },
    );
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.formSettings.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.formSettings.invalid) {
      return;
    }
    console.log(JSON.stringify(this.formSettings.value, null, 2));
  }

  findAll(): void{
    this.ps.getAllPatients().subscribe((resposta) =>{
      this.patients = resposta;
      console.log(this.patients)
    })
  }

}

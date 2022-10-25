import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessionalsService } from 'src/app/services/professionals.service';

@Component({
  selector: 'app-register-professional',
  templateUrl: './register-professional.component.html',
  styleUrls: ['./register-professional.component.css']
})
export class RegisterProfessionalComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private ps: ProfessionalsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        cpf: ['', [Validators.required, Validators.pattern("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")]],
        crm: ['', [Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
        sex: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        birthdate: ['', [Validators.pattern("(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})")]],
        motherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        fatherName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        street: ['', [Validators.required]],
        numberAddress: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        specialty:['', [Validators.required]],
        initialShift:['', [Validators.required]],
        finalShift:['', [Validators.required]]
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
    // this.ps.save(this.form.value).subscribe(result => console.log(result));
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}

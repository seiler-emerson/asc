import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessionalsService } from 'src/app/services/professionals.service';

@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.css']
})
export class EditShiftComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private ps: ProfessionalsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      initialShift:['', [Validators.required]],
      finalShift:['', [Validators.required]]
    })

}

hasError(field: string) {
  return this.form.get(field)?.errors;
}

get f() {
  return this.form.controls;
}

saveShift() {
  this.submitted = true;
  console.log(this.form.value);
  // this.ps.save(this.form.value).subscribe(result => console.log(result));
}

onCancel() {
  this.submitted = false;
  this.form.reset();
}


}

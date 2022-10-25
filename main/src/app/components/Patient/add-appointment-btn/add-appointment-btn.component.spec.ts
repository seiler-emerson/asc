import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentBtnComponent } from './add-appointment-btn.component';

describe('AddAppointmentBtnComponent', () => {
  let component: AddAppointmentBtnComponent;
  let fixture: ComponentFixture<AddAppointmentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

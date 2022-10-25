import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdmimComponent } from './register-admim.component';

describe('RegisterAdmimComponent', () => {
  let component: RegisterAdmimComponent;
  let fixture: ComponentFixture<RegisterAdmimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAdmimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

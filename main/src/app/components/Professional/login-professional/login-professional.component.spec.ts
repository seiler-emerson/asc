import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfessionalComponent } from './login-professional.component';

describe('LoginProfessionalComponent', () => {
  let component: LoginProfessionalComponent;
  let fixture: ComponentFixture<LoginProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

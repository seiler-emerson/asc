import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProfessionalComponent } from './admin-edit-professional.component';

describe('AdminEditProfessionalComponent', () => {
  let component: AdminEditProfessionalComponent;
  let fixture: ComponentFixture<AdminEditProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

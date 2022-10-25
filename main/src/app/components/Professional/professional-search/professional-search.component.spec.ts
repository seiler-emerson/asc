import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSearchComponent } from './professional-search.component';

describe('ProfessionalSearchComponent', () => {
  let component: ProfessionalSearchComponent;
  let fixture: ComponentFixture<ProfessionalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

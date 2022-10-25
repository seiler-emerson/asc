import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProfessionalComponent } from './homepage-professional.component';

describe('HomepageProfessionalComponent', () => {
  let component: HomepageProfessionalComponent;
  let fixture: ComponentFixture<HomepageProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

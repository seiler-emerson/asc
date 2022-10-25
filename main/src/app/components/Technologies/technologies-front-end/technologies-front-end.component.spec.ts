import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesFrontEndComponent } from './technologies-front-end.component';

describe('TechnologiesFrontEndComponent', () => {
  let component: TechnologiesFrontEndComponent;
  let fixture: ComponentFixture<TechnologiesFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesFrontEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

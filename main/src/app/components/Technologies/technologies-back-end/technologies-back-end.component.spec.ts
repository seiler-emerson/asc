import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesBackEndComponent } from './technologies-back-end.component';

describe('TechnologiesBackEndComponent', () => {
  let component: TechnologiesBackEndComponent;
  let fixture: ComponentFixture<TechnologiesBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesBackEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

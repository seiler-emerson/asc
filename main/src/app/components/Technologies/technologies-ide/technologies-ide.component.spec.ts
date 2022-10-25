import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesIdeComponent } from './technologies-ide.component';

describe('TechnologiesIdeComponent', () => {
  let component: TechnologiesIdeComponent;
  let fixture: ComponentFixture<TechnologiesIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesIdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

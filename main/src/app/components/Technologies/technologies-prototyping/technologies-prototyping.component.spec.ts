import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesPrototypingComponent } from './technologies-prototyping.component';

describe('TechnologiesPrototypingComponent', () => {
  let component: TechnologiesPrototypingComponent;
  let fixture: ComponentFixture<TechnologiesPrototypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesPrototypingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesPrototypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

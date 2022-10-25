import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesVersioningComponent } from './technologies-versioning.component';

describe('TechnologiesVersioningComponent', () => {
  let component: TechnologiesVersioningComponent;
  let fixture: ComponentFixture<TechnologiesVersioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesVersioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesVersioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

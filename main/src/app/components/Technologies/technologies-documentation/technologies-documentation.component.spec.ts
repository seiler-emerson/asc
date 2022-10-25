import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDocumentationComponent } from './technologies-documentation.component';

describe('TechnologiesDocumentationComponent', () => {
  let component: TechnologiesDocumentationComponent;
  let fixture: ComponentFixture<TechnologiesDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

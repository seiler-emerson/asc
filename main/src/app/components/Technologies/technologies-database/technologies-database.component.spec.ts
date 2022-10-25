import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDatabaseComponent } from './technologies-database.component';

describe('TechnologiesDatabaseComponent', () => {
  let component: TechnologiesDatabaseComponent;
  let fixture: ComponentFixture<TechnologiesDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudioCredito } from './form-estudio-credito';

describe('FormEstudioCredito', () => {
  let component: FormEstudioCredito;
  let fixture: ComponentFixture<FormEstudioCredito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEstudioCredito],
    }).compileComponents();

    fixture = TestBed.createComponent(FormEstudioCredito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

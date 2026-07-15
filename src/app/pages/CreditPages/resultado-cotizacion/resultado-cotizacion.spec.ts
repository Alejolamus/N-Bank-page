import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCotizacion } from './resultado-cotizacion';

describe('ResultadoCotizacion', () => {
  let component: ResultadoCotizacion;
  let fixture: ComponentFixture<ResultadoCotizacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoCotizacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoCotizacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoCotizacionValues } from './resultado';

describe('Resultado', () => {
  let component: ResultadoCotizacionValues;
  let fixture: ComponentFixture<ResultadoCotizacionValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoCotizacionValues],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoCotizacionValues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

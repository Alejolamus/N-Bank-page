import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContizarForm } from './contizar-form';

describe('ContizarForm', () => {
  let component: ContizarForm;
  let fixture: ComponentFixture<ContizarForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContizarForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ContizarForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

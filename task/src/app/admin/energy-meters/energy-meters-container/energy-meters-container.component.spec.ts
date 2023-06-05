import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMetersContainerComponent } from './energy-meters-container.component';

describe('EnergyMetersContainerComponent', () => {
  let component: EnergyMetersContainerComponent;
  let fixture: ComponentFixture<EnergyMetersContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyMetersContainerComponent]
    });
    fixture = TestBed.createComponent(EnergyMetersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InioCrearEmpleadosComponent } from './inio-crear-empleados.component';

describe('InioCrearEmpleadosComponent', () => {
  let component: InioCrearEmpleadosComponent;
  let fixture: ComponentFixture<InioCrearEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InioCrearEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InioCrearEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

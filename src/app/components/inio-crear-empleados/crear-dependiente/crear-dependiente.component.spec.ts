import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDependienteComponent } from './crear-dependiente.component';

describe('CrearDependienteComponent', () => {
  let component: CrearDependienteComponent;
  let fixture: ComponentFixture<CrearDependienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDependienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

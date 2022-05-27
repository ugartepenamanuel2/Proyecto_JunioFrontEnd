import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSobremesaComponent } from './crear-sobremesa.component';

describe('CrearSobremesaComponent', () => {
  let component: CrearSobremesaComponent;
  let fixture: ComponentFixture<CrearSobremesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSobremesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSobremesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

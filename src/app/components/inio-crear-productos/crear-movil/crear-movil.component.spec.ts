import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMovilComponent } from './crear-movil.component';

describe('CrearMovilComponent', () => {
  let component: CrearMovilComponent;
  let fixture: ComponentFixture<CrearMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

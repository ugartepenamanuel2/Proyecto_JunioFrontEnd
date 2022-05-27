import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPortatilComponent } from './crear-portatil.component';

describe('CrearPortatilComponent', () => {
  let component: CrearPortatilComponent;
  let fixture: ComponentFixture<CrearPortatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPortatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPortatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

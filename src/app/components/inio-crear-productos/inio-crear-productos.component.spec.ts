import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InioCrearProductosComponent } from './inio-crear-productos.component';

describe('InioCrearProductosComponent', () => {
  let component: InioCrearProductosComponent;
  let fixture: ComponentFixture<InioCrearProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InioCrearProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InioCrearProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

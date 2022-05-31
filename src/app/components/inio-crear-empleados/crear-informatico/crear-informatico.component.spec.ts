import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInformaticoComponent } from './crear-informatico.component';

describe('CrearInformaticoComponent', () => {
  let component: CrearInformaticoComponent;
  let fixture: ComponentFixture<CrearInformaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInformaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInformaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

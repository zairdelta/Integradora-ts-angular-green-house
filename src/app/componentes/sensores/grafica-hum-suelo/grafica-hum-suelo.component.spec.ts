import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHumSueloComponent } from './grafica-hum-suelo.component';

describe('GraficaHumSueloComponent', () => {
  let component: GraficaHumSueloComponent;
  let fixture: ComponentFixture<GraficaHumSueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHumSueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHumSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

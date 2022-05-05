import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaHumComponent } from './grafica-hum.component';

describe('GraficaHumComponent', () => {
  let component: GraficaHumComponent;
  let fixture: ComponentFixture<GraficaHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaHumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

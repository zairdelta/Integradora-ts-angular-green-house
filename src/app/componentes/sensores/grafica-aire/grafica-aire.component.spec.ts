import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAireComponent } from './grafica-aire.component';

describe('GraficaAireComponent', () => {
  let component: GraficaAireComponent;
  let fixture: ComponentFixture<GraficaAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

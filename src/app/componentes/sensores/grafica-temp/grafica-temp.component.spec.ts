import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTempComponent } from './grafica-temp.component';

describe('GraficaTempComponent', () => {
  let component: GraficaTempComponent;
  let fixture: ComponentFixture<GraficaTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

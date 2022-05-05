import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaNFCComponent } from './grafica-nfc.component';

describe('GraficaNFCComponent', () => {
  let component: GraficaNFCComponent;
  let fixture: ComponentFixture<GraficaNFCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaNFCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaNFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

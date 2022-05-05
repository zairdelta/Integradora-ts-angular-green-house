import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisHumsueloComponent } from './his-humsuelo.component';

describe('HisHumsueloComponent', () => {
  let component: HisHumsueloComponent;
  let fixture: ComponentFixture<HisHumsueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisHumsueloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisHumsueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

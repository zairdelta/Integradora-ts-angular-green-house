import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisHumComponent } from './his-hum.component';

describe('HisHumComponent', () => {
  let component: HisHumComponent;
  let fixture: ComponentFixture<HisHumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisHumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

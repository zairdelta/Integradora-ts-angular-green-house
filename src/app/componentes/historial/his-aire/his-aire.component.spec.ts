import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisAireComponent } from './his-aire.component';

describe('HisAireComponent', () => {
  let component: HisAireComponent;
  let fixture: ComponentFixture<HisAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

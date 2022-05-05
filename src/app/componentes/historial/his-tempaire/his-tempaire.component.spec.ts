import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisTempaireComponent } from './his-tempaire.component';

describe('HisTempaireComponent', () => {
  let component: HisTempaireComponent;
  let fixture: ComponentFixture<HisTempaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisTempaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisTempaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

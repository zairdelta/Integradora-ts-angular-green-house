import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggnotesComponent } from './aggnotes.component';

describe('AggnotesComponent', () => {
  let component: AggnotesComponent;
  let fixture: ComponentFixture<AggnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

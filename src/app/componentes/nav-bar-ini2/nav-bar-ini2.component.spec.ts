import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIni2Component } from './nav-bar-ini2.component';

describe('NavBarIni2Component', () => {
  let component: NavBarIni2Component;
  let fixture: ComponentFixture<NavBarIni2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIni2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarIni2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

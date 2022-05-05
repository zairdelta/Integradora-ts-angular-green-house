import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarIniComponent } from './nav-bar-ini.component';

describe('NavBarIniComponent', () => {
  let component: NavBarIniComponent;
  let fixture: ComponentFixture<NavBarIniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarIniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

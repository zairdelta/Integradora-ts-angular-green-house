import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoinicioComponent } from './contactoinicio.component';

describe('ContactoinicioComponent', () => {
  let component: ContactoinicioComponent;
  let fixture: ComponentFixture<ContactoinicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoinicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoinicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

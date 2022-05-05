import { TestBed } from '@angular/core/testing';

import { services } from './service.service';

describe('ServiceService', () => {
  let service: services;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(services);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

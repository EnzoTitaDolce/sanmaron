import { TestBed } from '@angular/core/testing';

import { PreparadosService } from './preparados.service';

describe('PreparadosService', () => {
  let service: PreparadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

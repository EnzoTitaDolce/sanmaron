import { TestBed } from '@angular/core/testing';

import { PerfumeriaService } from './perfumeria.service';

describe('PerfumeriaService', () => {
  let service: PerfumeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

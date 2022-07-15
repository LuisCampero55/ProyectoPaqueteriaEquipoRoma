import { TestBed } from '@angular/core/testing';

import { RutasServiceService } from './rutas-service.service';

describe('RutasServiceService', () => {
  let service: RutasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SonhosService } from './sonhos.service';

describe('SonhosService', () => {
  let service: SonhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SonhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SonhadorService } from './sonhador.service';

describe('SonhadorService', () => {
  let service: SonhadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SonhadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

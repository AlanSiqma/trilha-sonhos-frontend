import { TestBed } from '@angular/core/testing';

import { VisibilidadeSonhoService } from './visibilidade-sonho.service';

describe('VisibilidadeSonhoService', () => {
  let service: VisibilidadeSonhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadeSonhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BuscarDadosGridService } from './buscar-dados-grid.service';

describe('BuscarDadosGridService', () => {
  let service: BuscarDadosGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarDadosGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

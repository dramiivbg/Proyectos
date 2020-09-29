import { TestBed } from '@angular/core/testing';

import { PacienteServicioService } from './paciente-servicio.service';

describe('PacienteServicioService', () => {
  let service: PacienteServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

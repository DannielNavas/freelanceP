import { TestBed, inject } from '@angular/core/testing';

import { DatosBasicosService } from './datos-basicos.service';

describe('DatosBasicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosBasicosService]
    });
  });

  it('should be created', inject([DatosBasicosService], (service: DatosBasicosService) => {
    expect(service).toBeTruthy();
  }));
});

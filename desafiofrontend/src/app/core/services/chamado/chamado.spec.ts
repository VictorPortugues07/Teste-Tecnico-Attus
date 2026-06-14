import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ChamadoService } from './chamado';

describe('ChamadoService', () => {
  let service: ChamadoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChamadoService],
    });
    service = TestBed.inject(ChamadoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve buscar chamado por ID', () => {
    const mockChamado = { id: 1, equipamento: 'Monitor', descricao: 'Quebrado' };

    service.obterPorId(1).subscribe((res) => {
      expect(res).toEqual(mockChamado);
    });

    const req = httpMock.expectOne(`${service.API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockChamado);
  });
});

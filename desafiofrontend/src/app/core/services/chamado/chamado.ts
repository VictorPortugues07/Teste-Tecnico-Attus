import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chamado, ChamadoRequest, Page, ResumoChamados } from './models/chamado.models';

@Injectable({
  providedIn: 'root',
})
export class ChamadoService {
  public readonly API_URL = 'http://localhost:8080/api/v1/chamados';
  private readonly http = inject(HttpClient);

  criar(chamado: ChamadoRequest): Observable<Chamado> {
    return this.http.post<Chamado>(this.API_URL, chamado);
  }

  listar(page: number = 0, size: number = 10): Observable<Page<Chamado>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', 'dataAbertura,desc');

    return this.http.get<Page<Chamado>>(this.API_URL, { params });
  }

  obterResumo(): Observable<ResumoChamados> {
    return this.http.get<ResumoChamados>(`${this.API_URL}/resumo`);
  }

  atualizarStatus(id: number, status: string): Observable<Chamado> {
    const params = new HttpParams().set('novoStatus', status);
    return this.http.patch<Chamado>(`${this.API_URL}/${id}/status`, null, { params });
  }

  obterPorId(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.API_URL}/${id}`);
  }

  atualizar(id: number, dados: any): Observable<Chamado> {
    return this.http.put<Chamado>(`${this.API_URL}/${id}`, dados);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}

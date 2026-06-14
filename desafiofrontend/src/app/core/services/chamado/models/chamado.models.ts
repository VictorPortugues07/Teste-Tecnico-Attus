export enum StatusChamado {
  ABERTO = 'ABERTO',
  EM_ANALISE = 'EM_ANALISE',
  CONCLUIDO = 'CONCLUIDO',
}

export interface Chamado {
  id: number;
  equipamento: string;
  descricao: string;
  status: StatusChamado;
  dataAbertura: string;
}

export interface ChamadoRequest {
  equipamento: string;
  descricao: string;
}

export interface ResumoChamados {
  abertos: number;
  emAnalise: number;
  concluidos: number;
  total: number;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

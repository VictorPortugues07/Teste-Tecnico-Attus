import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { ChamadoService } from '../../../core/services/chamado/chamado';
import { Chamado, ResumoChamados } from '../../../core/services/chamado/models/chamado.models';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    CdkDropList,
    CdkDrag,
    DatePipe,
  ],
  templateUrl: './listagem.html',
  styleUrls: ['./listagem.scss'],
})
export class Listagem implements OnInit {
  private chamadoService = inject(ChamadoService);
  private cdr = inject(ChangeDetectorRef);
  private dialog = inject(MatDialog);

  resumo: ResumoChamados | null = null;

  abertos: Chamado[] = [];
  emAnalise: Chamado[] = [];
  concluidos: Chamado[] = [];

  ngOnInit(): void {
    this.carregarDashboard();
  }

  carregarDashboard(): void {
    this.carregarResumo();
    this.carregarChamados();
  }

  carregarResumo(): void {
    this.chamadoService.obterResumo().subscribe({
      next: (dados) => {
        this.resumo = dados;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao buscar resumo', err),
    });
  }

  carregarChamados(): void {
    this.chamadoService.listar(0, 100).subscribe({
      next: (pagina) => {
        const todos = pagina.content;
        this.abertos = todos.filter((c) => c.status === 'ABERTO');
        this.emAnalise = todos.filter((c) => c.status === 'EM_ANALISE');
        this.concluidos = todos.filter((c) => c.status === 'CONCLUIDO');
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao buscar chamados', err),
    });
  }

  drop(event: CdkDragDrop<Chamado[]>, novoStatus: string): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const chamado = event.previousContainer.data[event.previousIndex];

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.chamadoService.atualizarStatus(chamado.id, novoStatus).subscribe({
        next: () => this.carregarResumo(),
        error: (err) => {
          console.error(err);
          alert('Erro ao mover chamado.');
          this.carregarDashboard();
        },
      });
    }
  }

  excluir(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'glass-dialog',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.chamadoService.excluir(id).subscribe({
          next: () => {
            this.abertos = this.abertos.filter((item) => item.id !== id);
            this.emAnalise = this.emAnalise.filter((item) => item.id !== id);
            this.concluidos = this.concluidos.filter((item) => item.id !== id);
            this.cdr.detectChanges();
          },
          error: (err) => alert('Erro ao excluir'),
        });
      }
    });
  }
}

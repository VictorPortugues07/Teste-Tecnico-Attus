import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChamadoService } from '../../../core/services/chamado/chamado';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.scss'],
})
export class Formulario implements OnInit {
  private fb = inject(FormBuilder);
  private chamadoService = inject(ChamadoService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  chamadoId: number | null = null;
  modoEdicao = false;

  form = this.fb.group({
    equipamento: ['', [Validators.required, Validators.maxLength(100)]],
    descricao: ['', Validators.required],
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.chamadoId = Number(idParam);
      this.modoEdicao = true;
      this.carregarChamado();
    }
  }

  carregarChamado(): void {
    if (this.chamadoId) {
      this.chamadoService.obterPorId(this.chamadoId).subscribe({
        next: (chamado) => {
          this.form.patchValue({
            equipamento: chamado.equipamento,
            descricao: chamado.descricao,
          });
        },
        error: (err) => console.error('Erro ao carregar chamado', err),
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;
    const payload = {
      equipamento: this.form.value.equipamento ?? '',
      descricao: this.form.value.descricao ?? '',
    };

    const request$ = this.modoEdicao
      ? this.chamadoService.atualizar(this.chamadoId!, payload)
      : this.chamadoService.criar(payload);

    request$.subscribe({
      next: () => this.router.navigate(['/chamados']),
      error: (err) => console.error('Erro ao salvar chamado', err),
    });
  }

  get equipamento() {
    return this.form.get('equipamento');
  }
  get descricao() {
    return this.form.get('descricao');
  }
}

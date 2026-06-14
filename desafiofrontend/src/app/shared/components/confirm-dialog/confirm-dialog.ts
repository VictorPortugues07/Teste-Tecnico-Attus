import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: `
    <div class="custom-glass-modal">
      <h2 class="modal-title">Confirmar Exclusão</h2>
      <p class="modal-body">
        Tem certeza que deseja excluir este chamado? Esta ação é irreversível.
      </p>

      <div class="modal-actions">
        <button class="btn-cancel" (click)="onNoClick()">Cancelar</button>
        <button class="btn-confirm" (click)="onConfirm()">Excluir</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirm-dialog.scss'],
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}

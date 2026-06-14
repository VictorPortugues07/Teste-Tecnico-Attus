import { TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog'; // Ajuste aqui!

describe('ConfirmDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
    }).compileComponents();
  });

  it('deve criar o componente', () => {
    const fixture = TestBed.createComponent(ConfirmDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

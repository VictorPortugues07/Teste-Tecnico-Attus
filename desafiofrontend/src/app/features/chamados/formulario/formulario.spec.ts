import { TestBed } from '@angular/core/testing';
import { Formulario } from './formulario';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormularioComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
      ],
    }).compileComponents();
  });

  it('deve criar o formulário com campos vazios inicialmente', () => {
    const fixture = TestBed.createComponent(Formulario);
    const component = fixture.componentInstance;
    expect(component.form.valid).toBeFalsy();
  });
});

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelecaoService } from '../../core/services/selecao.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { AvaliacaoRequest } from '../../models/avaliacao-request';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
})
export class SelecaoComponent {
  avaliacaoForm: FormGroup;
  request: AvaliacaoRequest = {
    email: '',
    score: 0,
    comments: '',
    contactNumber: '',
    contactTime: '',
    contactRequest: false,
  };
  errorMessage: String = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SelecaoService, 
    private localStorageService: LocalStorageService) { 
      this.avaliacaoForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        score: [0, Validators.required],
        comments: [''],
        contactNumber: [''],
        contactTime: [''],
        contactRequest: [false]
      });
    }

  get email() {
    return this.avaliacaoForm.get('email');
  }

  public validarEmail(): void {
    if (this.avaliacaoForm.invalid) {
      this.errorMessage = 'Email é obrigatório e deve ser válido.';
      return;
    }

    const emailValue = this.email?.value;

    this.service.validarEmail(emailValue).subscribe(
      (data) => {
        this.localStorageService.set('email', emailValue);
        this.router.navigate(['avaliar']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );   
  }

  public logar(): void {
    this.router.navigate(["login"]);
  }
}

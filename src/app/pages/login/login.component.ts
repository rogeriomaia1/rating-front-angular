import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { LoginRequest } from '../../models/login-request';
import { CommonModule } from '@angular/common'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule] 
})
export class LoginComponent {
  request: LoginRequest = new LoginRequest();
  response: String = '';
  errorMessage: String = '';

  constructor(
    private router: Router, 
    private service: AutenticacaoService
  ) {}

  autenticar() {

    if (!this.request.email) {
      this.errorMessage = 'Usuário é obrigatório.';
      return;
    }

    if (!this.request.password) {
      this.errorMessage = 'Senha é obrigatória.';
      return;
    }

    this.service.autenticar(this.request).subscribe(
      (data) => {
       
        this.router.navigate(['lista-avaliacoes']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  voltar (){
    this.router.navigate(['selecao']);
  }
}

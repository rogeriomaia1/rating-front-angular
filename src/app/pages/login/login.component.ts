import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { LoginRequest } from '../../models/login-request';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule] // Adicione CommonModule aqui
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
    this.service.autenticar(this.request).subscribe(
      (data) => {
       
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}

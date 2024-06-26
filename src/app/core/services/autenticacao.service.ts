import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest } from '../../models/login-request';
import { LoginResponse } from '../../models/login-response'; // Importe a interface LoginResponse aqui

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/v1/login', request)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 401) {
      errorMessage = 'Falha na autenticação: Credenciais inválidas';
    } else {
      errorMessage = 'Problema no servidor. Por favor, tente novamente mais tarde.';
    }
    return throwError(errorMessage);
  }
}

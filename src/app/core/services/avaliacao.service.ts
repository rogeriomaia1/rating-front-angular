import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvaliacaoRequest } from '../../models/avaliacao-request';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private http: HttpClient) { }

  enviarAvaliacao(request: AvaliacaoRequest): Observable<LoginResponse> {
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
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AvaliacaoRequest } from '../../models/avaliacao-request';
import { AvaliacaoResponse } from '../../models/avaliacao-response';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  
  constructor(private http: HttpClient) { }

  enviarAvaliacao(request: AvaliacaoRequest): Observable<AvaliacaoResponse> {
    return this.http.post<AvaliacaoResponse>('/api/v1/ratings', request)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.status === 404) {
      errorMessage = 'Falha no envio da avaliação';
    } else {
      errorMessage = 'Problema no servidor. Por favor, tente novamente mais tarde.';
    }
    return throwError(errorMessage);
  }
}

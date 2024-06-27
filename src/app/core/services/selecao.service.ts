import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { AvaliacaoResponse } from '../../models/avaliacao-response';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

  constructor(private http: HttpClient) {
  }

  
  validarEmail(email: string): Observable<AvaliacaoResponse> {
    
    const params = new HttpParams().set('email', email);

    return this.http.get<AvaliacaoResponse>('/api/v1/ratings/validate', {params})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Houve um erro  na chamada da API para validar email.';

    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error: ${error.error.message}`;
    } else {
      
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
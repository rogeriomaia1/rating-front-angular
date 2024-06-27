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
    let errorMessage = '';
    if (error.status === 500) {
      errorMessage =  `Error Code: ${error.status}\nMessage: ${error.message}`;
    } else {
      errorMessage = 'Você já realizou a votação! Obrigado.';
    }
    return throwError(errorMessage);
  }

}
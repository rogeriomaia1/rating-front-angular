import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { GraficoPizzaResponse } from '../../models/grafico-pizza-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {
  constructor(private http: HttpClient) { }

  buscarDadosGraficoAavaliacao(): Observable<GraficoPizzaResponse> {
    return this.http.get<GraficoPizzaResponse>('/api/v1/dashboard/score-statistics')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.status !== 200) {
      errorMessage = 'Problema no servidor. Por favor, tente novamente mais tarde.';
    }
    return throwError(errorMessage);
  }
}

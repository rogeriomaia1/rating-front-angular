import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { GraficoPizzaResponse } from '../../models/grafico-pizza-response';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { GraficoPizzaRequest } from '../../models/grafico-pizza-request';


@Injectable({
  providedIn: 'root'
})

export class GraficosService {
  constructor(private http: HttpClient) { 
  }


  buscarDadosGraficoPizza( request: GraficoPizzaRequest): Observable<GraficoPizzaResponse> {
    
    return this.http.post<GraficoPizzaResponse>('/api/v1/graficos/carteira', request)
    .pipe(catchError(
      (error) => { 
        throw this.handlerError(error) 
      }
    ))
   
  }

  handlerError(erros: any) {
    if (erros.status === 404) {
      return 'Sem dados da carteira';
    } else {
      return 'Problema no servidor';
    }
    return erros;
  }
}

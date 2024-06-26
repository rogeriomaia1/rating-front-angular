import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rendimento } from '../../models/rendimento';

@Injectable({
  providedIn: 'root'
})

export class RendimentoService {
    constructor(private http: HttpClient) { 
  }

  buscarRendimento( params: any): Observable<Rendimento[]> {
    
    return this.http.post<Rendimento[]>('/api/v1/rendimentos', params)
    .pipe(catchError(
      (error) => { 
        throw this.handlerError(error) 
      }
    ))
   
  }

  handlerError(erros: any) {
    if (erros.status === 404) {
      return 'Lista vazia';
    } else {
      return 'Problema no servidor';
    }
    return erros;
  }
}

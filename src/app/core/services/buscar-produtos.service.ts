import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelecaoService {

  constructor(private http: HttpClient) {
  }

  buscarProdutos(): Observable<String[]> {
   
    return this.http.get<any>("/api/v1/produtos")
    .pipe(catchError((error) => { throw this.handlerError(error) }))
   
  }

  handlerError(erros: any) {
    return erros;
  }
}
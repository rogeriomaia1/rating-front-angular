import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvaliacaoResponse } from '../../models/avaliacao-response';


@Injectable({
  providedIn: 'root'
})
export class ListaAvaliacaoService {

  constructor(private http: HttpClient) { }

  obterTodasAvaliacoes(): Observable<AvaliacaoResponse[]> {
    return this.http.get<AvaliacaoResponse[]>('/api/v1/ratings');
  }
}

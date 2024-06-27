import { Component, OnInit } from '@angular/core';
import { AvaliacaoResponse } from '../../models/avaliacao-response';
import { ListaAvaliacaoService } from '../../core/services/lista-avaliacao.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-lista-avaliacoes',
  standalone: true,
  imports: [FormsModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule] ,
  templateUrl: './lista-avaliacoes.component.html',
  styleUrl: './lista-avaliacoes.component.scss'
})

export class ListaAvaliacoesComponent implements OnInit {
  avaliacoes: AvaliacaoResponse[] = [];

  constructor(
    private router: Router, 
    private service: ListaAvaliacaoService) { 

    }

  ngOnInit(): void {
    this.carregarAvaliacoes();
  }

  carregarAvaliacoes(): void {
    this.service.obterTodasAvaliacoes().subscribe(
      (data) => {
        this.avaliacoes = data;
      },
      (error) => {
        console.error('Erro ao carregar as avaliações', error);
      }
    );
  }

  voltar () {
    this.router.navigate(['selecao']);
  }

  irParaDashboard () {
    this.router.navigate(['dashboard']);
  }
  
}

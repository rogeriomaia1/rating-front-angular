import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent {
  escala: number = 3; // Valor inicial da escala
  observacoes: string = '';

  enviarAvaliacao() {
    
    console.log('Escala:', this.escala);
    console.log('Observações:', this.observacoes);

    // Limpar os campos após o envio, se necessário
    this.limparCampos();
  }

  limparCampos() {
    this.escala = 3;
    this.observacoes = '';
  }
}

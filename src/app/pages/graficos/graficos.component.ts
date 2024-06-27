import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendimentoService } from '../../core/services/redimento.service';
import { Rendimento } from '../../models/rendimento';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { GraficoPizzaResponse } from '../../models/grafico-pizza-response';
import { GraficosService } from '../../core/services/graficos.service';
import { GraficoPizzaRequest } from '../../models/grafico-pizza-request';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class GraficosComponent implements OnInit {
  username: string = "";
  dataInicio: string = "";
  dataFim: string = "";
  listaRendimento: Rendimento[] = [];
  dadoGraficoPizza!: GraficoPizzaResponse;
  listaProduto: String[] = [];
  public chart: any;
  request!: GraficoPizzaRequest;

  constructor(private route: ActivatedRoute, private router: Router, private service: GraficosService) {
    this.username = this.route.snapshot.queryParams['username'];
    this.dataInicio = this.route.snapshot.queryParams['dataInicio'];
    this.dataFim = this.route.snapshot.queryParams['dataFim'];
    this.listaRendimento = this.route.snapshot.queryParams['listaRendimento'];
  }

  ngOnInit(): void {
    this.buscarDadosGraficoPizza();
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    // Dados do gráfico
    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
      //  labels:  this.dadoGraficoPizza.listaProduto,
      labels: ['Péssimo', 'Ruim', 'Regular', 'Bom', 'Ótimo'],
      datasets: [
        {
          label: 'Percentual da carteira',
          // data: this.dadoGraficoPizza.listaPercentual
          data: [3, 7, 10, 10, 70]
        }
      ]
    };

    new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: false,
            text: 'Composição da avaliação de compra'
          }
        }
      },
    });
  }

  buscarDadosGraficoPizza() {
    this.request = {
      listaRendimento: this.listaRendimento
    };

    this.service.buscarDadosGraficoPizza(this.request).subscribe(
      (data) => {
        this.dadoGraficoPizza = data;
      },
      (error: any) => {
        this.listaRendimento = [];
      },
    );
  }

  public voltar(): void {
        this.router.navigate(["selecao"]);
  }
}

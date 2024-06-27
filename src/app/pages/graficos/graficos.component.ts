import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { GraficoPizzaResponse } from '../../models/grafico-pizza-response';
import { GraficosService } from '../../core/services/graficos.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class GraficosComponent implements OnInit {
  
  dadoGraficoPizza!: GraficoPizzaResponse;
  listaProduto: String[] = [];
  public chart: any;
  
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: GraficosService) {
  }

  ngOnInit(): void {
    this.buscarDadosGraficoPizza();
  }

  buscarDadosGraficoPizza() {
    this.service.buscarDadosGraficoAavaliacao().subscribe(
      (data) => {
        this.dadoGraficoPizza = data;
        this.inicializarGrafico(); // Inicialize o gráfico após os dados serem carregados
      },
      (error: any) => {
        console.error('Erro ao buscar dados do gráfico', error);
      },
    );
  }

  inicializarGrafico() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    const graficoData = this.dadoGraficoPizza;

    const data = {
      labels: graficoData.listScore,
      datasets: [
        {
          data: graficoData.listCount
        }
      ]
    };

    this.chart = new Chart(ctx, {
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

  public voltar(): void {
    this.router.navigate(["selecao"]);
  }
}

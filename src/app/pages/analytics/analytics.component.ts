import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartItem, ChartTypeRegistry, registerables } from 'chart.js';
import { Charts } from '../../interface/charts';
import { accountsChartData, salesChartData, ticketsChartData } from '../../test-data/chartData';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent implements AfterViewInit{
  
   ngAfterViewInit() {
    Chart.register(...registerables); // Required for Chart.js 3+

   
    this.lineChart(accountsChartData);
    this.lineChart(salesChartData);
    this.lineChart(ticketsChartData);
  }

  

  lineChart(dataChart:Charts){
  let ctx = document.getElementById(dataChart.name) as HTMLCanvasElement;
    new Chart(ctx, {
      type: dataChart.type  as keyof ChartTypeRegistry,
       data: {
        labels: dataChart.data.labels,
        datasets: [{
          label: dataChart.data.datasets[0].label,
          fill: dataChart.data.datasets[0].fill, // fills area below line
          data: dataChart.data.datasets[0].data,
          backgroundColor: dataChart.data.datasets[0].backgroundColor,
          pointRadius: dataChart.data.datasets[0].pointRadius,         // size of points
          pointHoverRadius: dataChart.data.datasets[0].pointHoverRadius,
          borderColor: dataChart.data.datasets[0].borderColor,    // line color
          borderWidth: dataChart.data.datasets[0].borderWidth,         // line thickness
        }]
      },
      options: {
        responsive: dataChart.options.responsive,
        plugins: {
          legend: {
            display: dataChart.options.plugins.legend.display,
          }, 
          tooltip: {
            callbacks: {
              label: context =>  context.formattedValue // Only show value
            }
          }
          
        },
        
        scales: {
          y: { display: dataChart.options.scales.y.display },
          x: {display: dataChart.options.scales.y.display },
        }
      }
    });
  }
}

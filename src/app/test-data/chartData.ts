import { Charts } from "../interface/charts";

export const accountsChartData:Charts = {
      name: 'accountsChart',
      type: 'line',
       data: {
        labels: ['', '', '','','',''],
        datasets: [{
          label: '# of Votes',
          fill: 'start', // fills area below line
          data: [12, 19, 3,15,7,14],
          backgroundColor: ['rgba(204, 233, 255, 1)'],
          pointRadius: 6,         // size of points
          pointHoverRadius: 8 ,
          borderColor: '#16aaff',    // line color
          borderWidth: 3,         // line thickness
   
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }, 
          tooltip: {
            callbacks: {
              label: context =>  context.formattedValue // Only show value
            }
          }
          
        },
        
        scales: {
          y: { display: false },
          x: {display: false },
        }
      }
};

export const ticketsChartData:Charts = {
      name: 'ticketsChart',
      type: 'line',
       data: {
        labels: ['', '', '','','',''],
        datasets: [{
          label: '# of Votes',
          fill: 'start', // fills area below line
          data: [12, 19, 3,15,7,14].reverse(),
          backgroundColor: ['rgba(255, 193, 7, 0.2)'],
          pointRadius: 6,         // size of points
          pointHoverRadius: 8 ,
          borderColor: '#ffc107',    // line color
          borderWidth: 3,         // line thickness
   
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }, 
          tooltip: {
            callbacks: {
              label: context =>  context.formattedValue // Only show value
            }
          }
          
        },
        
        scales: {
          y: { display: false },
          x: {display: false },
        }
      }
};
export const salesChartData:Charts = {
      name: 'salesChart',
      type: 'line',
       data: {
        labels: ['', '', '','','','','',''],
        datasets: [{
          label: '# of Votes',
          fill: 'start', // fills area below line
          data: [1, 129, 53,15,67,14,44,18],
          backgroundColor: ['rgba(58, 196, 125, 0.2)'],
          pointRadius: 6,         // size of points
          pointHoverRadius: 8 ,
          borderColor: '#3ac47d',    // line color
          borderWidth: 3,         // line thickness
   
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }, 
          tooltip: {
            callbacks: {
              label: context =>  context.formattedValue // Only show value
            }
          }
          
        },
        
        scales: {
          y: { display: false },
          x: {display: false },
        }
      }
};
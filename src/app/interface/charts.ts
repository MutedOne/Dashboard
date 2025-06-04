export interface Charts {
    name:string;
    type: string ;
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      fill: 'start' | boolean;  // in your example it's 'start', but Chart.js also allows true/false
      data: number[];
      backgroundColor: string[];
      pointRadius: number;
      pointHoverRadius: number;
      borderColor: string;
      borderWidth: number;
    }>;
  };
  options: {
    responsive: boolean;
    plugins: {
      legend: {
        display: boolean;
      };
      tooltip: {
        callbacks: {
          label: (context: { formattedValue: string }) => string;
        };
      };
    };
    scales: {
      y: { display: boolean };
      x: { display: boolean };
    };
  };
}

import React from 'react';
import Chart from 'react-apexcharts';
import { IrootReducer } from '../store';
import { useSelector } from 'react-redux';
import { formatAmount } from '../store/transactions/utils';

const ServicesChart: React.FC = () => {
  const { formattedServicesTotal, services } = useSelector((state: IrootReducer) => state.transaction);

  const colorsChart = ['#cc2ad5', '#792ad5', '#3a86fe'];

  const extractColumn = (arr: Array<any>, column: string) => {
    return arr.map(item => item[column])
  }

  const chart = {
    options: {
      chart: {
        id: 'chart-servicos',
      },
      colors: colorsChart,
      yaxis: {
        labels: {
          formatter: (value: any) => formatAmount(value),
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      labels: extractColumn(services, 'name'),
    },
    series: extractColumn(services, 'amount'),
  }

  const handleCircleBackgroundColor = (index: number): string => {
    if (index > colorsChart.length - 1) {
      index = index % colorsChart.length;
    }
    return colorsChart[index];
  }

  return (
    <div className="chart services">
      <div className="title-chart">Serviços</div>
      <Chart
        options={chart.options}
        series={chart.series}
        type="donut"
        width="190"
      />
      <ul className="itens-chart">
        {services.map((service, index) => (
          <li key={service.id}>
            <div className="circle" style={{ backgroundColor: handleCircleBackgroundColor(index) }} />
            {service.name}
            <div>{service.formattedAmount} ({service.percentage})</div>
          </li>
        ))}
        <li className="total">Total <div>{formattedServicesTotal} (100%)</div></li>
      </ul>
    </div>
  );
}

export default ServicesChart;
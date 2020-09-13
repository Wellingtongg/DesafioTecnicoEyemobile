import React from 'react';
import Chart from 'react-apexcharts';

const Totals: React.FC = () => {
  const formatValue = (value: any): string => {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    });
  }

  const chartDonut = {
    options: {
      chart: {
        id: 'chart-servicos',
      },
      colors: ['#cc2ad5', '#792ad5', '#3a86fe'],
      yaxis: {
        labels: {
          formatter: (value: any) => formatValue(value),
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      labels: ['Banho & Tosa', 'Consultas', 'Medicamentos'],
    },
    series: [6445.25, 3867.15, 2578.10],
  }
  
  const chartBar = {
    options: {
      chart: {
        id: 'chart-receitas-despesas',
        toolbar: {
          show: false,
        }
      },
      colors: ['#01DCAA', '#FE4F64'],
      yaxis: {
        labels: {
          formatter: (value: any) => formatValue(value),
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          endingShape: 'rounded',
          distributed: true
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Receitas', 'Despesas'],
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: ['Receitas x Despesas'],
        data: [12890.50, 2711.90]
      },
    ],
  }

  return (
    <>
      <div className="filter">
        <button className="active">Hoje</button>
        <button>Última Semana</button>
        <button>Último Mês</button>
        <button>Outro Período</button>
      </div>

      <div className="container-totals">
        <div className="container-amount">
          <div>Valor Total</div>
          <div>
            <span>R$</span>
            <span>10.178,60</span>
          </div>
        </div>
        <hr className="totals" />
        <div className="container-charts">
          <div className="chart services">
            <div className="title-chart">Serviços</div>
            <Chart
              options={chartDonut.options}
              series={chartDonut.series}
              type="donut"
              width="190"
            />
            <ul className="itens-chart">
              <li><div className="circle" style={{ backgroundColor: '#cc2ad5'}} /> Banho & Tosa <div>R$ 6.445,25 (50%)</div></li>
              <li><div className="circle" style={{ backgroundColor: '#792ad5'}} /> Consultas <div>R$ 3.867,15 (30%)</div></li>
              <li><div className="circle" style={{ backgroundColor: '#3a86fe'}} /> Medicamentos <div>R$ 2.578,10 (20%)</div></li>
              <li className="total">Total <div>R$ 12.890,50 (100%)</div></li>
            </ul>
          </div>
          <div className="chart">
            <div className="title-chart">Receitas x Despesas</div>
            <Chart
              options={chartBar.options}
              series={chartBar.series}
              type="bar"
              width="300"
            />
            <ul className="itens-chart">
              <li><div className="circle" style={{ backgroundColor: '#24e0b5'}} /> Receitas <div>R$ 12.890,50 (82%)</div></li>
              <li><div className="circle" style={{ backgroundColor: '#fc687a'}} /> Despesas <div>R$ 2.711,90 (18%)</div></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Totals;
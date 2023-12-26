import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales £',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475, 66755, 35690, 15560, 33589, 25678, 29786, 45876],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235, 0.4',

        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        },
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <>
      <div className=' w-[180vh]  relative lg:h-[70vh] h-[70vh] m-auto p-4 border rounded-lg bg-white dark:bg-light-gray dark:text-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;

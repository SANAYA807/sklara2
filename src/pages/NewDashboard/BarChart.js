import React from 'react'
import { Bar } from 'react-chartjs-2'
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Earnings in €',
            data: [3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 1],
            backgroundColor: '#B5DAE9',
        },
    ],
};

const BarChart = () => {

    const options = {

        borderRadius: 10,
        responsive: true,
        maintainAspectRatio: true,
        minBarLength: 10,
        layout: {
            padding: {
                top: 30,
                bottom: 20
            }
        },
        scales: {
            xAxis: {
                display: true,
                grid: {
                    display: false,
                    borderColor: '#fff',
                }
            },
            yAxis: {
                grid: {
                    borderDash: [4, 5],
                    color: '#D5E5E5',
                    borderColor: '#fff',
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                        return value + ' hr';
                    }
                },

            }
        },
        plugins: {
            legend: {
                display: false
            },

        }

    };
    return (
        <div className="chart">
            <Bar options={options} data={data} height='70%' />

        </div>
    )
}

export default BarChart
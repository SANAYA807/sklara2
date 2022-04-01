import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip);

const DognutChart = () => {

    const labels = ['Completed', 'Progress', 'Start']
    const data = {
        labels,
        datasets: [
            {
                label: 'Earnings in €',
                data: [10, 5, 3],
                // borderRadius: '20'
                // backgroundColor: '#B5DAE9',
            },
        ],
    };
    const per = [10, 5, 3]
    const plugins = [

        {
            id: 'text',
            beforeDraw: function (chart, a, b) {
                var width = chart.width,
                    height = chart.height,
                    ctx = chart.ctx;

                ctx.restore();
                ctx.font = '600 30px OpenSans';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#98C38B';

                var text = '09 Courses',
                    textX = Math.round((width - ctx.measureText(text).width) / 1.98),
                    textY = height / 2.2;

                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        },
    ];
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#98C38B', '#BDD8B5', '#DFEEDB'],
        borderWidth: 0,
        borderJoinStyle: 'round',
        // borderRadius: [10, 20, 30]
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 30,

                }
            }
        },

        cutout: 100,
        elements: {
            arc: {
                borderWidth: 0,
                // borderRadius: 0,
            },
        },
        layout: {
            padding: {
                top: 30,
                bottom: 60
            },
            height: 400
        },

    }

    return (
        <div><Doughnut data={data} options={options} plugins={plugins} height={764} width={764} /></div>
    )
}

export default DognutChart
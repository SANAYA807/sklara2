import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';




const PolarChart = () => {
   

// Sample data
const series = [76, 67, 61, 90]
const data = [
{
	name: 'A',
	x: 20.47,
	fill: '#8784d8',
},
{
	name: 'B',
	x: 26.69,
	fill: '#84a6ed',
},
{
	name: 'C',
	x: 15.69,
	fill: '#8ed1e1',
},
{
	name: 'D',
	x: 8.22,
	fill: '#82da9d',
},
{
	name: 'E',
	x: 78.63,
	fill: '#a2de6c',
},
{
	name: 'F',
	x: 82.63,
	fill: '#d0dd57',
},
{
	name: 'G',
	x: 80.67,
	fill: '#ffa658',
},
];


return (
    <>
<RadialBarChart width={500} height={500} data={data}
	innerRadius="20%" outerRadius="70%">
	<RadialBar minAngle={30} dataKey="x" series={series} clockWise/>
</RadialBarChart>

</>
);
}

export default PolarChart;

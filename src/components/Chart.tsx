import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {MonthsType} from "../App";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Статистика по месяцам',
        },
    },
};


type ChartType = {
    data: Array<MonthsType>
}

export function Chart(props: ChartType) {
    let dataForChart = props.data.map(item => item.monthlySum)
    let labels = props.data.map(item => item.title)

    const data = {
        labels,
        datasets: [
            {
                label: 'Чистая стоимость работы в месяц',
                data: dataForChart,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data}/>;
}

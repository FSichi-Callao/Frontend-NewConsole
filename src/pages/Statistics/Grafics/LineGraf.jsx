import React from 'react'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import './styles.css'

console.log(Chart);

export const LineGraf = () => {

    const data = {
        labels: [
            '09-03-22',
            '15-03-22',
            '19-03-22',
            '23-03-22',
            '31-03-22',
            '06-04-22',
            '13-04-22',
            '10-05-22',
            '17-05-22',
            '24-05-22',
            '30-05-22',
            '06-06-22',
            '29-06-22',
            '08-07-22',
            '19-08-22',
            '19-09-22',
            '13-03-22'
        ],
        datasets: [
            {
                label: 'Persona Natural',
                data: [2, 11, 26, 13, 13, 12, 34, 1, 19, 35, 75, 14, 14, 18, 10, 6, 5, 4, 2, 2, 7, 31, 3, 5, 11, 2, 4, 3, 4, 1, 1, 17, 8, 15, 12, 64, 47, 42, 5, 4, 7, 1, 4, 2, 1, 1, 2, 1, 4, 1, 4, 13, 12, 4, 1, 6, 5, 1, 2, 27, 1, 4, 20],
                borderColor: 'red',
                backgroundColor: 'red'
            },
            {
                label: 'Persona Juridica',
                data: [3, 7],
                borderColor: 'blue',
                backgroundColor: 'blue'
            }
        ]
    };

    return (
        <div className='grafic-container-section'>
            <div className='grafic-container-box'>
                <Line
                    data={data} height={450} width={1000}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                suggestedMin: -20,
                                suggestedMax: 80,
                                ticks: {
                                    stepSize: 10,
                                    color: '#ffffff'
                                },
                            },

                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    stepSize: 10,
                                    color: '#ffffff'
                                },
                            },
                        }
                    }}
                />
            </div>
        </div>
    )
}
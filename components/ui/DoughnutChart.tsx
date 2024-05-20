
'use client';

import React from 'react';
import {Chart as chartJs, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { options } from 'countup';
chartJs.register(ArcElement,Tooltip, Legend)
function DoughnutChart( {accounts}:DoughnutChartProps) {
  
  const data={
    datasets:[
        {label:"Banks",
            data:[12000, 15000, 20000],
            backgroundColor:['#23f54d','#cef2f5', '#7de3f4']
        }],
    labels:[ 'Bank 1', 'Bank 2', 'Bank 3'
        ]
      
    
  }
  
    return (
    <Doughnut data={data}
              options={{
                cutout:'60%',
                plugins: {
                    legend:{
                        display: false
                    }
                }
              }}
    />
  )
}

export default DoughnutChart
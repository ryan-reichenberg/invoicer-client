import { ChartData, ChartOptions } from 'chart.js'
import React, { Component } from 'react'
import Chart from '../../components/Chart/Chart'
import Card from '../../components/Card/Card'
import Todo from 'src/components/Todo/Todo'

export default class Dashboard extends Component {
  render() {
    const data: ChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr',  'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
          {
              label: "Sales",
              data: [120, 150, -150, 30, 0],
              fill: false,
              pointRadius: 5,
              pointBorderColor: context => {
                  let dataSet = context.dataset?.data
                  let index = context.dataIndex
                  let dataPoint = dataSet != null && index != null ? dataSet[index] : null;
                  if (dataPoint == null) return '';
                  if ((dataPoint = dataPoint!) > 0 ) {
                    return '#34D399'
                  } else if (dataPoint < 0) {
                    return '#F87171'
                  } else {
                    return '#9CA3AF'
                  }
              },
              pointBackgroundColor: "#fff",
              pointBorderWidth: 3,
          }
      ]
    }
    const options: ChartOptions = {
      // maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
          line: {
              tension: 0,
          },
      },
      scales: {
          xAxes: [{
              ticks: {
                  fontColor: "#9CA3AF",
                  autoSkip: false,
                  maxRotation: 90,
                  minRotation: 90
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
          yAxes: [{
              ticks: {
                  fontColor: "#9CA3AF",
                  // forces step size to be 5 units
                  min: -500,
                  max:500,
                  stepSize: 125 // <----- This prop sets the stepSize
              },
          }]
      }
  }
    return (
    <div className="h-full w-full p-8 sm:mt-16 mt-28">
      <div className="max-w-6xl">
      <div className="">
          <h1 className='text-2xl'>Welcome Back, Tom!</h1>
            <p className="text-sm">Summary</p>
          </div>
        <div className=''>
          <div className="mr-14 ">
            <div className="flex">
            <div className='w-1/2 mr-16'>
            <h2 className="text-xl mt-11 mb-5">Expenses</h2>
            <Card width={'w-full'} padding="pb-8">
              <div className="flex ml-2 mr-2 justify-between pb-6">
                <div className="flex items-center justify-center text-lg text-gray-700"><h2 className="font-semibold">Net Profit:</h2><span className="ml-2 font-light">$0</span></div>
                <div className='flex items-center justify-center'><svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg> <span className="text-gray-400 text-sm">$500.50</span></div>
              </div>
              <Chart data={data} options={options} type='line'/>
            </Card>
            </div>
            <div className='w-2/5'>
            <h2 className="text-xl mt-11 mb-5">Deadlines</h2>
            <Card width={'w-full'} padding="pb-4">
              <Todo />
            </Card>
            </div>
          </div>
         
          </div>
        </div>
        </div>
    </div>
  );
}
}

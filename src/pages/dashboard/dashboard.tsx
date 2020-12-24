import { ChartData, ChartOptions } from 'chart.js'
import React, { Component } from 'react'
import Chart from '../../components/Chart/Chart'
import Card from '../../components/Card/Card'
import Table from '../../components/Table/Table'
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
              pointRadius: 4,
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
              pointBorderWidth: 2,
          }
      ]
    }
    const options: ChartOptions = {
      maintainAspectRatio: false,
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
    <div className="h-full w-full p-8 mt-20">
      <div className="max-w-6xl">
      <div className="">
          <h1 className='text-2xl'>Welcome Back, Tom!</h1>
            <p className="text-sm">Summary</p>
          </div>
        <div className=''>
          <div className="mr-14">
            <div className="flex justify-between">
              <div className='w-1/2'>
                <h2 className="text-xl mt-10 mb-3">Expenses</h2>
                <Card width={'w-full'} padding="pb-5 px-4 pt-5">
                  <div className="flex ml-2 mr-2 justify-between  pb-4">
                    <div className="flex items-center justify-center text-lg text-gray-700"><h2 className="font-semibold">Net Profit:</h2><span className="ml-2 font-light">$0</span></div>
                    <div className='flex items-center justify-center'><svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path></svg> <span className="text-gray-400 text-sm">$500.50</span></div>
                  </div>
                  <Chart data={data} options={options} type='line'/>
                </Card>
              </div>
              <div className='w-5/12'>
                <h2 className="text-xl mt-11 mb-3">Deadlines</h2>
                <Card width={'w-full'} padding=" pr-4 pt-5 pb-9 pl-6">
                  <Todo />
                </Card>
              </div>
            </div>
            <h2 className="text-xl mt-8 mb-3">Overdue</h2>
            <Card width={'w-full'}>
                <Table />
            </Card>
          </div>
        </div>
        </div>
    </div>
  );
}
}

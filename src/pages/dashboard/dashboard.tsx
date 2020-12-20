import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

// const data: ChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr',  'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             label: "Sales",
//             data: [120, 150, -150, 30, 0],
//             fill: false,
//             pointRadius: 5,
//             pointBorderColor: context => {
//                 let dataSet = context.dataset?.data
//                 let index = context.dataIndex
//                 let dataPoint = dataSet != null && index != null ? dataSet[index] : null;
//                 if (dataPoint == null) return '';
//                 if ((dataPoint = dataPoint!) > 0 ) {
//                   return '#34D399'
//                 } else if (dataPoint < 0) {
//                   return '#F87171'
//                 } else {
//                   return '#9CA3AF'
//                 }
//             },
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 3,
//         }
//     ]
//   }
//   const options: ChartOptions = {
//     legend: {
//       display: false
//     },
//     elements: {
//         line: {
//             tension: 0,
//         },
//     },
//     scales: {
//         xAxes: [{
//             ticks: {
//                 fontColor: "#9CA3AF",
//                 autoSkip: false,
//                 maxRotation: 90,
//                 minRotation: 90
//             },
//             gridLines: {
//                 display: false,
//                 drawBorder: false,
//             },
//         }],
//         yAxes: [{
//             ticks: {
//                 fontColor: "#9CA3AF",
//                 // forces step size to be 5 units
//                 min: -500,
//                 max:500,
//                 stepSize: 125 // <----- This prop sets the stepSize
//             },
//         }]
//     }
// }
//   return (
//     <div className="h-full w-full p-8">
//         <Card width={'max-w-2xl'}>
//           <div className="flex justify-btween">
//             <div className="flex ml-2 pb-4 text-lg text-gray-700"><h2 className="font-semibold">Net Profit:</h2><span className="ml-2 font-light">$0</span></div>
//           </div>
//           <Chart data={data} options={options} type='line'></Chart>
//         </Card>
//     </div>
//   );
// }
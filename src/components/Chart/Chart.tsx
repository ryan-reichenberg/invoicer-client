import React, { Component } from 'react'
import { Chart as ChartJS, ChartData, ChartOptions }  from 'chart.js';
import './Chart.css'

type ChartProps = {
    type: string,
    data?: ChartData,
    options?: ChartOptions
}

export default class Chart extends Component<ChartProps> {
    chartRef = React.createRef<HTMLCanvasElement>();
    static defaultProps = {
        type: 'line'
    }

    componentDidMount() {
        if(!this.props.data) {
            console.error('No data passed through')
            return;
        }
        const localChartRef : any = this.chartRef.current?.getContext('2d');
        new ChartJS(localChartRef, {
            type: this.props.type,
            data: this.props.data,
            options: this.props.options, 
        })
    }
    render() {
        return (
            <div className="relative w-full h-64">
                <canvas id="chart" ref={this.chartRef} className='pb-4'></canvas>
            </div>
        )
    }
}

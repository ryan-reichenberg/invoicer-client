import React, { Component } from 'react'
import { Chart as ChartJS, ChartData, ChartOptions }  from 'chart.js';
import  classes from './Chart.module.css';

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
            <div className="w-full h-full relative">
                <canvas id="chart" ref={this.chartRef}></canvas>
            </div>
        )
    }
}

import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class RadialBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [this.props.series * 10],
			options: {
				chart: {
                    height: 100,
					type: 'radialBar',
					toolbar: {
						show: false,
					},
				},
				plotOptions: {
					radialBar: {
						startAngle: -180,
						endAngle: 225,
						hollow: {
							margin: 0,
							size: '70%',
							background: '#fff',
							image: undefined,
							imageOffsetX: 0,
							imageOffsetY: 0,
							position: 'front',
							dropShadow: {
								enabled: true,
								top: 3,
								left: 0,
								blur: 4,
								opacity: 0.24,
							},
						},
						track: {
							background: '#fff',
							strokeWidth: '67%',
							margin: 0, // margin is in pixels
							dropShadow: {
								enabled: true,
								top: -3,
								left: 0,
								blur: 4,
								opacity: 0.35,
							},
						},

						dataLabels: {
							show: true,
							name: {
								offsetY: -10,
								show: false,
								color: '#888',
								fontSize: '15px',
							},
							value: {
								formatter: function (val) {
									return parseInt(val) / 10;
								},
								color: '#111',
								fontSize: '45px',
								show: true,
							},
						},
					},
				},
				fill: {
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'horizontal',
						shadeIntensity: 0.5,
						gradientToColors: ['#ABE5A1'],
						inverseColors: true,
						opacityFrom: 1,
						opacityTo: 1,
						stops: [0, 100],
					},
				},
				stroke: {
					lineCap: 'round',
				},
				labels: ['Percent'],
			},
		};
	}

	render() {
		return (
			<div id='card'>
				<div id='chart'>
					<ReactApexChart
						options={this.state.options}
						series={this.state.series}
						type='radialBar'
						height={160}
					/>
				</div>
			</div>
		);
	}
}

export default RadialBar;

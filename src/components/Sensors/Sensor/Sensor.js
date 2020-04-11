import React, { Component } from 'react';
import NumberToWord from 'number-to-words';
import RadialBarChart from '../../Chart/RadialBar';
import '../Sensor/sensor.css';

class Sensor extends Component {
	
	getClass = () => {
		if(this.props.smokeLevel > 5 || this.props.co2Level > 5) {
			return 'sensor-container-left-warning'
		} else {
			return 'sensor-container-left-safe'
		}
	}

	render() {
		return (
			<div className='sensor-container-main shadow'>
				<div className={this.getClass()}>
					{this.getFloor(this.props.floor)}
					<p className='location-normal'>FLOOR</p>
					<p className='location-highlight'>{this.props.room}</p>
					<p className='location-normal'>ROOM</p>
				</div>

				<div className='sensor-container-right'>
					<div className='active-status-container'>
						{this.props.activated ? (
							<p className='active-status-true'>Activated</p>
						) : (
							<p className='active-status-false'>Disabled</p>
						)}
					</div>
					<div className='chart-container'>
						<div className='chart-container-left'>
							<div className='chart'>
								<RadialBarChart series={this.props.smokeLevel} />
							</div>
							<div className='name'>
								<p>SMOKE</p>
							</div>
						</div>
						<div className='chart-container-right'>
							<div className='chart'>
								<RadialBarChart series={this.props.co2Level} />
							</div>
							<div className='name'>
								<p>
									CO<sub>2</sub>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getFloor = (floor) => {
		const ordinal = NumberToWord.toOrdinal(parseInt(floor));
		const word = ordinal.slice(-2);
		return (
			<p className='location-highlight'>
				{floor}
				<sup>{word}</sup>
			</p>
		);
	};
}

export default Sensor;

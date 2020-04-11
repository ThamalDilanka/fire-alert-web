import React, { Component } from 'react';
import Sensor from './Sensor/Sensor';

class Sensors extends Component {
	render() {
		const sensors = this.props.sensors;
		return (
			<div>
				{sensors.map((sensor) => {
					return (
						<Sensor
							key={sensor._id}
							id={sensor._id}
							floor={sensor.floor}
							room={sensor.room}
							smokeLevel={sensor.lastReading.smokeLevel}
							co2Level={sensor.lastReading.co2Level}
							activated={sensor.activated}
						/>
					);
				})}
			</div>
		);
	}
}

export default Sensors;

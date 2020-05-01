import React, { Component } from 'react';
import Axios from 'axios'; // Library that enables to send http requests
import Sensors from './components/Sensors/Sensors';
import Navbar from './components/Navbar/navbar';

class App extends Component {
	state = {
		sensors: [],
	};

	// Executes after the app component mount on the web
	componentDidMount() {
		// Getting sensor details from the API
		Axios.get(
			'https://fire-alert-solution.herokuapp.com/api/v1/sensors'
		).then((res) => {
			const sensors = res.data.data.sensors;
			this.setState({ sensors: [...sensors] });
		});

		this.refresh(); // Reload the sensor details
	}

	// Updating the sensor details in every 40 seconds
	refresh = () => {
		setInterval(() => {
			Axios.get(
				'https://fire-alert-solution.herokuapp.com/api/v1/sensors'
			).then((res) => {
				const sensors = res.data.data.sensors;
				this.setState({ sensors: [...sensors] });
			});
		}, 40000);
	};

	// Render the DOM
	render() {
		return (
			<div>
				<Navbar />
				<div className='container'>
					<Sensors sensors={this.state.sensors} />
				</div>
			</div>
		);
	}
}

export default App;

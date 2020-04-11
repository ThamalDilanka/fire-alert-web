import React, { Component } from 'react';
import Axios from 'axios';
import Sensors from './components/Sensors/Sensors';
import Navbar from './components/Navbar/navbar';

class App extends Component {
	state = {
		sensors: [],
	};

	componentDidMount() {
		Axios.get(
			'https://fire-alert-solution.herokuapp.com/api/v1/sensors'
		).then((res) => {
			const sensors = res.data.data.sensors;
			this.setState({ sensors: [...sensors] });
		});

		this.refresh();
	}

	refresh = () => {
		setInterval(() => {
			Axios.get(
				'https://fire-alert-solution.herokuapp.com/api/v1/sensors'
			).then((res) => {
				const sensors = res.data.data.sensors;
				this.setState({ sensors: [...sensors] });
			});
		}, 2000);
	};

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

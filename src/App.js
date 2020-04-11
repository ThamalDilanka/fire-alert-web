import React, {Component} from 'react';
import Axios from 'axios';
import Sensors from './components/Sensors/Sensors';

class App extends Component {
  state = {
    sensors: []
  };

  componentDidMount() {
    Axios.get('/api/v1/sensors').then((res) => {
      const sensors = res.data.data.sensors;
      this.setState({ sensors: [...sensors] });
    });

    this.refresh();
  }
  
  refresh = () => {
    setInterval(() => {
      Axios.get('/api/v1/sensors').then((res) => {
        const sensors = res.data.data.sensors;
        this.setState({ sensors: [...sensors] });
      });
    }, 5000);
  }


	render() {
		return (
    <div className='container'>
      <Sensors sensors={this.state.sensors}/>
    </div>
    );
	}
}

export default App;

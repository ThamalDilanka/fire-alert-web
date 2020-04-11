import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav
				className='navbar navbar-light sticky-top'
				style={{ backgroundColor: '#ebebeb' }}
			>
				<a
					className='navbar-brand'
					href='https://ThamalDilanka.github.io/fire-alert-web'
				>
					<img
						src='https://i.ibb.co/N7L2Gn3/fire-alert-logo-name.png'
						alt='aq-visualizer-logo'
						className='d-inline-block align-top'
						height='50'
					/>
				</a>
			</nav>
		);
	}
}

export default Navbar;

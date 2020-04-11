import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav
				className='navbar navbar-light sticky-top'
				style={{ backgroundColor: '#ebebeb' }}
			>
				<a className='navbar-brand' href='www.google.com'>
					<img
						src='https://i.ibb.co/JsKqVZW/aq-visualizer-logo.png'
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

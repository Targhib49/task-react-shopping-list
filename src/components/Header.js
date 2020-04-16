import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';

class NavbarPage extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color="indigo" dark expand="md">
				<MDBNavbarBrand>
					<strong className="white-text">Kulakan Shopping Center</strong>
				</MDBNavbarBrand>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;

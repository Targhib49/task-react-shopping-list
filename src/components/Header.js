import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';

class NavbarPage extends Component {
	logoutCheck = () => {
		localStorage.setItem('isLogin', false);
		this.props.history.push('/');
	};

	render() {
		return (
			<MDBNavbar color="indigo" dark expand="md" className="justify-content-between">
				<MDBNavbarBrand>
					<strong className="white-text">Kulakan Shopping Center</strong>
				</MDBNavbarBrand>
				<MDBBtn className="logout" onClick={this.logoutCheck}>
					Logout
				</MDBBtn>
			</MDBNavbar>
		);
	}
}

export default withRouter(NavbarPage);

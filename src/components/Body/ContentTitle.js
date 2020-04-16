import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class ContentTitle extends Component {
	render() {
		return (
			<MDBContainer>
				<MDBRow className="content-title">
					<MDBCol>
						<h1>Your Shopping Cart</h1>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

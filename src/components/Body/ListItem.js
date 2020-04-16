import React, { Component, Fragment } from 'react';
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBBtn,
	MDBIcon,
	MDBAnimation
} from 'mdbreact';

export default class ListItem extends Component {
	render() {
		return (
			<MDBCol sm="5" md="5" lg="3" xl="3">
				<MDBAnimation type="fadeIn" duration="3s">
					<MDBCard className="item-card">
						<MDBCardImage
							className="img-fluid pt-2"
							src="https://rajaimportir.com/wp-content/uploads/2018/07/Grosir-Barang-Import-Murah..jpg"
							waves
						/>
						<MDBCardBody>
							<MDBCardTitle className="pt-2">Card title</MDBCardTitle>
							<MDBCardText>
								Some quick example text to build on the card title and make up the bulk of the
								card&apos;s content.
							</MDBCardText>
							<MDBRow className="justify-content-end">
								<MDBBtn className="edit-button" href="#">
									<MDBIcon icon="pen" />
								</MDBBtn>
								<MDBBtn className="delete-button" href="#">
									<MDBIcon far icon="trash-alt" />
								</MDBBtn>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBAnimation>
			</MDBCol>
		);
	}
}

import React, { Component } from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter
} from 'mdbreact';

export default class AddItem extends Component {
	state = {
		modal8: false
	};

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol>
						<MDBBtn color="blue-grey" className="add-item" onClick={this.toggle(8)}>
							<MDBIcon icon="plus" className="mr-1" />Add new item
						</MDBBtn>
						<MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
							<MDBModalHeader toggle={this.toggle(8)}>Add New Item</MDBModalHeader>

							<MDBModalFooter>
								<MDBBtn color="secondary" onClick={this.toggle(8)}>
									Close
								</MDBBtn>
								<MDBBtn color="primary">Save changes</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

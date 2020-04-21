import React, { Component } from 'react';
import ModalAddItem from './ModalAddItem';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

export default class AddItem extends Component {
	state = {
		modal8: false,
		itemName: '',
		itemDesc: '',
		itemLink: ''
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
						<ModalAddItem state={this.state} toggle={this.toggle} users={this.props.users} />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

import React, { Component } from 'react';
import moment from 'moment';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBInput
} from 'mdbreact';

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

	updateInput = (event) => {
		const eventValue = event.target.value;
		const eventName = event.target.name;
		this.setState((prevState) => ({
			[eventName]: eventValue
		}));
	};

	sumbitData = (event) => {
		event.preventDefault();
		const items = localStorage.getItem('shoppingItems');

		const shoppingItems = {
			itemName: this.state.itemName,
			itemDesc: this.state.itemDesc,
			itemLink: this.state.itemLink,
			createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
		};
		const getLocalStorage = items === null ? [] : JSON.parse(items);
		getLocalStorage.push(shoppingItems);
		localStorage.setItem('shoppingItems', JSON.stringify(getLocalStorage));
		window.location.reload();
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
							<form onSubmit={(event) => this.sumbitData(event)}>
								<MDBModalHeader toggle={this.toggle(8)}>Add New Item</MDBModalHeader>
								<MDBModalBody>
									<div className="grey-text">
										<MDBInput
											name="itemName"
											label="Enter your item"
											icon="apple-alt"
											group
											type="text"
											onChange={(event) => this.updateInput(event)}
										/>
										<MDBInput
											name="itemDesc"
											type="textarea"
											rows="2"
											label="Enter item description"
											icon="pencil-alt"
											style={{ resize: 'none' }}
											onChange={(event) => this.updateInput(event)}
										/>
										<MDBInput
											name="itemLink"
											label="Enter your item's image link"
											icon="image"
											group
											type="text"
											onChange={(event) => this.updateInput(event)}
										/>
									</div>
								</MDBModalBody>
								<MDBModalFooter>
									<MDBBtn color="secondary" onClick={this.toggle(8)}>
										Close
									</MDBBtn>
									<MDBBtn type="submit" color="primary">
										Save changes
									</MDBBtn>
								</MDBModalFooter>
							</form>
						</MDBModal>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

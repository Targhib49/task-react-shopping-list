import React, { Component } from 'react';
import moment from 'moment';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

export default class ModalAddItem extends Component {
	updateInput = (event) => {
		const eventValue = event.target.value;
		const eventName = event.target.name;
		this.setState((prevState) => ({
			[eventName]: eventValue
		}));
	};

	sumbitData = async (event) => {
		event.preventDefault();
		console.log(this.props, 'props');

		const url = `https://5e945b44f591cb0016d80f27.mockapi.io/Users/${this.props.users.id}/ShoppingList`;

		const items = localStorage.getItem('shoppingItems');

		const shoppingItems = {
			name: this.state.itemName,
			description: this.state.itemDesc,
			image: this.state.itemLink,
			createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
		};

		const options = {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(shoppingItems),
			method: 'POST'
		};

		fetch(url, options)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				const getLocalStorage = items === null ? [] : JSON.parse(items);
				getLocalStorage.push(shoppingItems);
				localStorage.setItem('shoppingItems', JSON.stringify(getLocalStorage));
				alert('item added');
				window.location.reload();
			});
	};

	render() {
		return (
			<div>
				<MDBModal isOpen={this.props.state.modal8} toggle={this.props.toggle(8)} fullHeight position="right">
					<form onSubmit={(event) => this.sumbitData(event)}>
						<MDBModalHeader toggle={this.props.toggle(8)}>Add New Item</MDBModalHeader>
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
							<MDBBtn color="secondary" onClick={this.props.toggle(8)}>
								Close
							</MDBBtn>
							<MDBBtn type="submit" color="primary">
								Save changes
							</MDBBtn>
						</MDBModalFooter>
					</form>
				</MDBModal>
			</div>
		);
	}
}

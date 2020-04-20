import React, { Component } from 'react';
import moment from 'moment';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class ModalEditItem extends Component {
	state = {
		itemName: '',
		itemDesc: '',
		itemLink: ''
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

		const newItem = {
			itemName: this.state.itemName,
			itemDesc: this.state.itemDesc,
			itemLink: this.state.itemLink,
			createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
		};
		console.log(this.state.itemName, 'itemName');
		console.log(this.state.itemDesc, 'itemDesc');
		console.log(this.state.itemLink, 'itemLink');

		let listItems = this.props.list.items;
		listItems.splice(this.props.editIndex, 1, newItem);
		localStorage.setItem('shoppingItems', JSON.stringify(listItems));
		window.location.reload();
	};

	render() {
		return (
			<MDBContainer>
				<MDBModal
					isOpen={this.props.state.modal14}
					toggle={this.props.toggle(14, this.props.editIndex)}
					centered
				>
					<form onSubmit={(event) => this.sumbitData(event)}>
						<MDBModalHeader toggle={this.props.toggle(14, this.props.editIndex)}>
							Edit your item<br />
							<h6>
								(If you don't want to change the input value, please type "a" and erase it again before
								sav changes)
							</h6>
						</MDBModalHeader>
						<MDBModalBody>
							<MDBInput
								name="itemName"
								label="Enter your item"
								icon="apple-alt"
								group
								type="text"
								valueDefault={this.props.list.items[this.props.editIndex].itemName}
								onChange={(event) => this.updateInput(event)}
							/>
							<MDBInput
								name="itemDesc"
								type="textarea"
								rows="2"
								label="Enter item description"
								icon="pencil-alt"
								style={{ resize: 'none' }}
								valueDefault={this.props.list.items[this.props.editIndex].itemDesc}
								onChange={(event) => this.updateInput(event)}
							/>
							<MDBInput
								name="itemLink"
								label="Enter your item's image link"
								icon="image"
								group
								type="text"
								valueDefault={this.props.list.items[this.props.editIndex].itemLink}
								onChange={(event) => this.updateInput(event)}
							/>
						</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn color="secondary" onClick={this.props.toggle(14, this.props.editIndex)}>
								Cancel
							</MDBBtn>
							<MDBBtn type="submit" color="primary">
								Save changes
							</MDBBtn>
						</MDBModalFooter>
					</form>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalEditItem;

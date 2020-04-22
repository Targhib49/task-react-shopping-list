import React, { Component } from 'react';
import moment from 'moment';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class ModalEditItem extends Component {
	state = {
		itemList: [],
		name: '',
		description: '',
		image: ''
	};

	updateInput = (event) => {
		const eventValue = event.target.value;
		const eventName = event.target.name;

		this.setState((prevState) => ({
			[eventName]: eventValue
		}));
	};

	sumbitData = async (event) => {
		event.preventDefault();
		const currentItem = this.state.itemList.find((element) => Number(element.id) === this.props.editIndex);
		const url = `https://5e945b44f591cb0016d80f27.mockapi.io/Users/${this.props.users
			.id}/ShoppingList/${currentItem.id}`;

		const newItem = {
			name: this.state.name === '' ? currentItem.name : this.state.name,
			description: this.state.description === '' ? currentItem.description : this.state.description,
			image: this.state.image === '' ? currentItem.image : this.state.image,
			createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
		};

		let listItems = this.props.list;
		listItems.splice(this.props.editIndex, 1, newItem);

		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ newItem })
		});

		await response.json();

		localStorage.setItem('shoppingItems', JSON.stringify(listItems));
		window.location.reload();
	};

	componentDidMount = async () => {
		const url = `https://5e945b44f591cb0016d80f27.mockapi.io/Users/${this.props.users.id}/ShoppingList`;

		const response = await fetch(url);
		const result = await response.json();

		const userItemsList = result.filter((element) => element.UserId === this.props.users.id);
		this.setState({ itemList: userItemsList });
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
						</MDBModalHeader>
						<MDBModalBody>
							<MDBInput
								name="name"
								label="Enter your item"
								icon="apple-alt"
								group
								type="text"
								valueDefault={this.props.list[this.props.editIndex].name}
								onChange={(event) => this.updateInput(event)}
							/>
							<MDBInput
								name="description"
								type="textarea"
								rows="2"
								label="Enter item description"
								icon="pencil-alt"
								style={{ resize: 'none' }}
								valueDefault={this.props.list[this.props.editIndex].description}
								onChange={(event) => this.updateInput(event)}
							/>
							<MDBInput
								name="image"
								label="Enter your item's image link"
								icon="image"
								group
								type="text"
								valueDefault={this.props.list[this.props.editIndex].image}
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

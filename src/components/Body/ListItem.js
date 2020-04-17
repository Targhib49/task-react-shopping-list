import React, { Component, Fragment } from 'react';
import moment from 'moment';
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

	editItem = (index) => {
		const items = JSON.parse(localStorage.getItem('shoppingItems'));
		console.log(items);
		let newItemName = prompt('Enter your new item name');
		let newItemDesc = prompt('Enter your new item desc');
		let newItemLink = prompt('Enter your new item link');

		if (!newItemName) {
			newItemName = items[index].itemName;
		}

		if (!newItemDesc) {
			newItemDesc = items[index].itemDesc;
		}

		if (!newItemLink) {
			newItemLink = items[index].itemLink;
		}

		const newItem = {
			itemName: newItemName,
			itemDesc: newItemDesc,
			itemLink: newItemLink,
			createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
		};

		items.splice(index, 1, newItem);
		localStorage.setItem('shoppingItems', JSON.stringify(items));
		window.location.reload();
	};

	deleteItem = (index) => {
		const items = JSON.parse(localStorage.getItem('shoppingItems'));
		let isConfirm = window.confirm(
			"Do you really want to delete your item and all of it's data?\nThis action is irreversible"
		);
		if (isConfirm) {
			items.splice(index, 1);
			localStorage.setItem('shoppingItems', JSON.stringify(items));
			window.location.reload();
		}
	};

	render() {
		const { items } = this.props;
		const numItems = items.length;

		return (
			<Fragment>
				{numItems === 0 ? (
					<div className="pl-3">No item in your cart</div>
				) : (
					items.map((_item, _index) => {
						return (
							<MDBCol sm="5" md="5" lg="3" xl="3" key={_index}>
								<MDBAnimation type="fadeIn" duration="3s" delay={_index / 2 + 's'}>
									<MDBCard className="item-card">
										<MDBCardImage className="img-fluid pt-2" src={_item.itemLink} waves />
										<MDBCardBody>
											<MDBCardTitle className="pt-2">{_item.itemName}</MDBCardTitle>
											<MDBCardText>{_item.itemDesc}</MDBCardText>
											<MDBCardText>{_item.createdAt}</MDBCardText>
											<MDBRow className="justify-content-end">
												<MDBBtn
													className="edit-button"
													onClick={() => {
														this.editItem(_index);
													}}
												>
													<MDBIcon icon="pen" />
												</MDBBtn>
												<MDBBtn
													className="delete-button"
													href="#"
													onClick={() => {
														this.deleteItem(_index);
													}}
												>
													<MDBIcon far icon="trash-alt" />
												</MDBBtn>
											</MDBRow>
										</MDBCardBody>
									</MDBCard>
								</MDBAnimation>
							</MDBCol>
						);
					})
				)}
			</Fragment>
		);
	}
}

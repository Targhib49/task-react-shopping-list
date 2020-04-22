import React, { Component, Fragment } from 'react';
import ModalEditItem from './ModalEditItem';
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
		modal14: false,
		itemName: '',
		itemDesc: '',
		itemLink: '',
		index: 0
	};

	updateInput = (event) => {
		const eventValue = event.target.value;
		const eventName = event.target.name;
		this.setState((prevState) => ({
			[eventName]: eventValue
		}));
	};

	toggle = (nr, index) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber],
			index: index
		});
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
		const items = this.props.items;
		const numItems = items.length;
		console.log(items);
		// console.log(this.props.users);

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
										<MDBCardImage className="img-fluid pt-2" src={_item.image} waves />
										<MDBCardBody>
											<MDBCardTitle className="pt-2">{_item.name}</MDBCardTitle>
											<MDBCardText>{_item.description}</MDBCardText>
											<MDBCardText>{_item.createdAt}</MDBCardText>
											<MDBRow className="justify-content-end">
												<MDBBtn className="edit-button" onClick={this.toggle(14, _index)}>
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
												<ModalEditItem
													state={this.state}
													toggle={this.toggle}
													editIndex={this.state.index}
													list={this.props.items}
													users={this.props.users}
												/>
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

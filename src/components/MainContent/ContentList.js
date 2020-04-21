import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import ListItem from './ListItem';

export default class ContentList extends Component {
	constructor() {
		super();
		this.state = {
			shoppingList: []
		};
	}

	componentDidMount = () => {
		const items = localStorage.getItem('shoppingItems');
		if (items) {
			this.setState({ shoppingList: JSON.parse(items) });
		} else {
			console.log('No shopping list');
		}
	};

	render() {
		return (
			<MDBContainer className="pt-4">
				<MDBRow>
					<ListItem items={this.state.shoppingList} users={this.props.users} />
				</MDBRow>
			</MDBContainer>
		);
	}
}

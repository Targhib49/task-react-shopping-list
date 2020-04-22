import React, { Component } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';
import ListItem from './ListItem';

export default class ContentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shoppingList: [],
			userId: ''
		};
	}

	componentDidMount = async () => {
		await console.log(this.props.users.id);

		await this.setState({
			userId: this.props.users.id
		});
		console.log(this.state.userId);

		const url = `https://5e945b44f591cb0016d80f27.mockapi.io/Users/${this.state.userId}/ShoppingList`;

		const response = await fetch(url);
		const result = await response.json();

		if (result) {
			localStorage.setItem('shoppingItems', JSON.stringify(result));
			this.setState({ shoppingList: result });
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

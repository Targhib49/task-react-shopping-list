import React, { Component, Fragment } from 'react';
import { MDBContainer } from 'mdbreact';
import ContentTitle from './MainContent/ContentTitle.js';
import AddItem from './MainContent/AddItem';
import ContentList from './MainContent/ContentList';
import Header from './Header';

export default class Body extends Component {
	state = {
		userLogin: ''
	};

	componentDidMount = () => {
		const users = localStorage.getItem('userData');
		if (users) {
			this.setState({ userLogin: JSON.parse(users) });
		}
	};

	render() {
		return (
			<Fragment>
				<Header />
				<MDBContainer fluid className="content-body">
					<ContentTitle />
					<AddItem users={this.state.userLogin} />
					<ContentList users={this.state.userLogin} />
				</MDBContainer>
			</Fragment>
		);
	}
}

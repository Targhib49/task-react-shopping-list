import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import ContentTitle from './Body/ContentTitle.js';
import AddItem from './Body/AddItem';
import ContentList from './Body/ContentList';

export default class Body extends Component {
	render() {
		return (
			<MDBContainer fluid className="content-body">
				<ContentTitle />
				<AddItem />
				<ContentList />
			</MDBContainer>
		);
	}
}

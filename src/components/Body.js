import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import ContentTitle from './MainContent/ContentTitle.js';
import AddItem from './MainContent/AddItem';
import ContentList from './MainContent/ContentList';

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

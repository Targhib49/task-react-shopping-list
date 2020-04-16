import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBAnimation } from 'mdbreact';
import ListItem from './ListItem';

export default class ContentList extends Component {
	render() {
		return (
			<MDBContainer className="pt-4">
				<MDBRow>
					<ListItem />
				</MDBRow>
			</MDBContainer>
		);
	}
}

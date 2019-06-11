import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getConatct } from './action/contactAction';

class ShowContact extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getConatct(id);
	}

	render() {
		const { contact } = this.props;
		console.log(contact);
		if (contact) {
			return (
				<div className="container mt-5 mb-5">
					<Link to={'/contactnew'} className="nav-link">
						<Button
							style={{ float: 'right' }}
							className=""
							variant="contained"
							color="primary">
							Contact List
						</Button>
					</Link>
					<div className="shadow  mb-4 bg-white">
						<h3 style={{ textAlign: 'center' }}>View Contacts</h3>
						<p>User Id:- {contact.id}</p>
						<p>Name:- {contact.name}</p>
						<p>Phone:- {contact.phone}</p>
						<p>Website:- {contact.website}</p>
						<p>Email Address:- {contact.email}</p>

						{/* <p>company Name:- {contact.company.name}</p> */}
						{/* <p>User address :- {contact.address.street}</p>
						<p>City :- {contact.address.city}</p> */}
					</div>
				</div>
			);
		} else {
			return <h1>Loading....</h1>;
		}
	}
}

ShowContact.propTypes = {
	contact: PropTypes.object.isRequired,
	getConatct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contact: state.contact.contact
});

export default connect(
	mapStateToProps,
	{ getConatct }
)(ShowContact);

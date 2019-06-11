import React, { Component } from "react";
import Test from "./test";
import "../App.css";
import API from "../api";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getConatcts } from "../action/contactAction";

class Contactlist extends Component {
	componentDidMount() {
		this.props.getConatcts();
	}

	deleteContact(id) {
		API.delete(`users/${id}`)
			.then(res => {
				console.log(res.data);
				alert("Delete Successfully");
			})
			.catch(error => {
				alert(error);
			});
	}

	render() {
		const { contacts } = this.props;

		return (
			<React.Fragment>
				<div className="mt-5 mb-5" style={{ float: "right" }}>
					<Link to="/About" className="nav-link">
						{" "}
						<Button className="" variant="contained" color="secondary">
							Contact Info
						</Button>
					</Link>
				</div>
				<div className="container row mt-5 mb-5">
					{contacts.map((contact, index) => (
						<Test
							key={contact.id}
							contact={contact}
							deleteClick={this.deleteContact.bind(this, contact.id)}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}

Contactlist.propTypes = {
	contacts: PropTypes.array.isRequired,
	getConatcts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

export default connect(
	mapStateToProps,
	{ getConatcts }
)(Contactlist);

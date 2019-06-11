import React, { Component } from "react";
import Massage from "./Messages";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getConatcts } from "../action/contactAction";

class Profile extends Component {
	componentDidMount() {
		this.props.getConatcts();
	}
	onClick(id) {
		console.log(id);
		// this.props.deleteConatct(id);
	}
	render() {
		const { contacts } = this.props;
		return (
			<div className="row">
				<Massage boxdata={contacts} onClick={this.onClick} />
			</div>
		);
	}
}
Profile.propTypes = {
	contacts: PropTypes.array.isRequired,
	getConatcts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

export default connect(
	mapStateToProps,
	{ getConatcts }
	// null,
	// { deleteConatct }
)(Profile);

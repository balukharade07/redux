import React, { Component } from "react";
import Messages from "./Messages";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_CONTACTS } from "../action/types";

class Settings extends Component {
	onClick(id) {
		alert(id);
	}
	render() {
		return (
			<div className="row">
				<Messages boxdata={this.props.contacts} onClick={this.onClick} />
			</div>
		);
	}
}

Settings.propTypes = {
	contacts: PropTypes.array.isRequired,
	getConatcts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contacts: state.contact1.contacts
});

const mapDispatchToProps = dispatch => ({
	getConatcts: () => dispatch({ type: GET_CONTACTS })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings);

import React, { Component } from "react";
import Inputs from "./Component_tab/demo";
import CustomButton from "./button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addConatcts } from "./action/contactAction";
// import uuid from "uuid";

class AddConatctNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			phone: "",
			website: ""
		};
		this.onSubmitContact = this.onSubmitContact.bind(this);
	}
	onChange = e => {
		let fields = this.state;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	};

	onSubmitContact = e => {
		e.preventDefault();
		const { name, email, phone, website } = this.state;
		const addConatctList = { name, email, phone, website };
		this.props.addConatcts(addConatctList);
		this.props.history.push("/");
		this.setState({
			name: "",
			email: "",
			phone: "",
			website: ""
		});
		console.log(addConatctList);
	};
	render() {
		const { name, email, phone, website } = this.state;
		const formElements = [
			{
				label: "Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter name",
				name: "name",
				value: name
			},
			{
				label: "email",
				type: "email",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter email",
				name: "email",
				value: email
			},
			{
				label: "User Phone",
				type: "text",
				autoComplete: "OFF2",
				class: "form-control",
				placeholder: "Enter phone",
				name: "phone",
				value: phone
			},
			{
				label: "User WebSite",
				type: "text",
				autoComplete: "OFF1",
				class: "form-control",
				placeholder: "Enter website",
				name: "website",
				value: website
			}
		];
		const Custom_Button = [
			{
				type: "submit",
				className: "col-lg-4 mt-5 mb-5",
				variant: "contained",
				color: "primary",
				btnText: "Submit"
			}
		];

		return (
			<React.Fragment>
				<div className="offset-lg-1 col-lg-10 mt-5">
					<h2 style={{ textAlign: "center" }}>Add New Contact</h2>
					<form onSubmit={this.onSubmitContact}>
						<Inputs formElements={formElements} onChange={this.onChange} />
						<div className="text-center">
							<CustomButton Custom_Button={Custom_Button} />
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

AddConatctNew.propTypes = {
	addConatcts: PropTypes.func.isRequired
};

export default connect(
	null,
	{ addConatcts }
)(AddConatctNew);

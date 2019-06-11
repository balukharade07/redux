import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Editinput from "./editinput";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getConatct, updateConatct } from "./action/contactAction";

class EditContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			address: {
				street: "",
				city: ""
			},
			city: "",
			phone: "",
			website: ""
		};
		this.onSubmitContact = this.onSubmitContact.bind(this);
	}

	//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
	componentWillReceiveProps(nextProps) {
		const { name, email, address, phone, website } = nextProps.contact;
		this.setState({
			name: name,
			email: email,
			address: {
				street: address.street,
				city: address.city
			},
			phone: phone,
			website: website
		});
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getConatct(id);
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmitContact = e => {
		e.preventDefault();
		const { id } = this.props.match.params;
		const { name, email, address, phone, website } = this.state;
		const updConatct = { id, name, email, address, phone, website };
		this.props.updateConatct(updConatct);
		this.props.history.push("/contactnew");
	};

	render() {
		const { name, email, address, phone, website } = this.state;
		const AllReg = "[a-zA-Z0-9_]+.*$";
		const formElements = [
			{
				label: "Name",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter name",
				name: "name",
				defaultValue: name,
				required: true,
				pattern: AllReg
			},
			{
				label: "email",
				type: "email",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter email",
				name: "email",
				defaultValue: email,
				required: true,
				pattern: AllReg
			},
			{
				label: "User address",
				type: "text",
				autoComplete: "OFF12",
				class: "form-control",
				placeholder: "Enter address",
				name: "address.street",
				defaultValue: address.street,
				required: true,
				pattern: AllReg
			},
			{
				label: "User City",
				type: "text",
				autoComplete: "OFF3",
				class: "form-control",
				placeholder: "Enter city",
				name: "address.city",
				defaultValue: address.city,
				required: true,
				pattern: AllReg
			},
			{
				label: "User Phone",
				type: "text",
				autoComplete: "OFF2",
				class: "form-control",
				placeholder: "Enter phone",
				name: "phone",
				defaultValue: phone,
				required: true,
				pattern: AllReg
			},
			{
				label: "User WebSite",
				type: "text",
				autoComplete: "OFF1",
				class: "form-control",
				placeholder: "Enter website",
				name: "website",
				defaultValue: website,
				required: true,
				pattern: AllReg
			}
		];
		return (
			<React.Fragment>
				<div className="container mt-5 mb-5">
					<Link to={"/contactnew"} className="nav-link">
						<Button
							style={{ float: "right" }}
							className=""
							variant="contained"
							color="primary">
							Contact List
						</Button>
					</Link>
					<div className="shadow  mb-4 bg-white">
						<h3 style={{ textAlign: "center" }}>Edit Contact</h3>
						<form onSubmit={this.onSubmitContact}>
							<div className="row">
								<div className="col-lg-12">
									<Editinput
										formElements={formElements}
										onChange={this.onChange}
									/>
								</div>
							</div>
							<div className="text-center">
								<Button
									type="submit"
									className="col-lg-4 mt-5"
									id="primary"
									variant="contained"
									color="primary">
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

EditContact.propTypes = {
	contact: PropTypes.object.isRequired,
	getConatct: PropTypes.func.isRequired,
	updateConatct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contact: state.contact.contact
});

export default connect(
	mapStateToProps,
	{ getConatct, updateConatct }
)(EditContact);

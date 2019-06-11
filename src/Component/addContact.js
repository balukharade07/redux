import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
import "../App.css";
import API from "../api";
import CustomButton from "../button";

export default class addContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Username: "",
			name: "",
			email: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitContact = e => {
		e.preventDefault();
		// const myFrom = {
		// 	name: this.state.name,
		// 	Username: this.state.Username,
		// 	email: this.state.email
		// };

		API.post(`users`, this.state).then(res => {
			console.log(res.data);
			alert("User Created Successfully");
			this.setState({
				Username: "",
				name: "",
				email: ""
			});
		});
	};

	render() {
		const { Username, name, email } = this.state;
		const { Name, Age, Address } = this.props;
		const OnlyAlphabetsReg = "^[a-zA-Z][a-zA-Z ]+$";
		const AllReg = "[a-zA-Z0-9_]+.*$";

		const Custom_Button = [
			{
				type: "submit",
				className: "col-lg-4 mt-5",
				variant: "contained",
				color: "primary",
				btnText: "Submit"
			}
		];
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-lg-7">
						<h2 className="text-center">
							<div className="alert alert-success" role="alert">
								Add Contacts
							</div>
						</h2>
						<form onSubmit={this.onSubmitContact} autoComplete="OFF">
							<div className="form-group">
								<label>{Name}</label>
								<input
									type="text"
									autoComplete="NO"
									className="form-control"
									placeholder={Name}
									name="Username"
									onChange={this.onChange}
									value={Username}
									pattern={OnlyAlphabetsReg}
									required
								/>
							</div>
							<div className="form-group">
								<label>{Age}</label>
								<input
									type="text"
									autoComplete="NO1"
									className="form-control"
									placeholder={Age}
									name="name"
									onChange={this.onChange}
									value={name}
									pattern={OnlyAlphabetsReg}
									required
								/>
							</div>
							<div className="form-group">
								<label>{Address}</label>
								<input
									type="email"
									autoComplete="OFF"
									className="form-control"
									placeholder={Address}
									name="email"
									onChange={this.onChange}
									value={email}
									pattern={AllReg}
									required
								/>
							</div>
							<div className="text-center">
								<CustomButton Custom_Button={Custom_Button} />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

import React, { Component } from "react";
import Inputs from "./demo";
import Select from "./select";
import RadioInput from "./radioInput";
import CustomButton from "../button";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			age: "",
			email: "",
			example_select: "",
			example_select2: "",
			exampleRadios: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitContact = e => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			username: "",
			password: "",
			age: "",
			email: "",
			example_select: "",
			example_select2: "",
			exampleRadios: ""
		});
	};
	render() {
		const OnlyAlphabetsReg = "^[a-zA-Z][a-zA-Z ]+$";
		const OnlyNumCharReg = "^[0-9][0-9 ]*$";
		const AllReg = "[a-zA-Z0-9_]+.*$";
		const email = "[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$";

		const formElements = [
			{
				label: "Username",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Username",
				name: "username",
				value: this.state.username,
				required: true,
				pattern: OnlyAlphabetsReg
			},
			{
				label: "Age",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Age",
				name: "age",
				value: this.state.age,
				required: true,
				pattern: OnlyNumCharReg
			},
			{
				label: "Email",
				type: "text",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Email Address",
				name: "email",
				value: this.state.email,
				required: true,
				pattern: email
			},
			{
				label: "Password",
				type: "password",
				autoComplete: "OFF",
				class: "form-control",
				placeholder: "Enter Password",
				name: "password",
				value: this.state.password,
				required: true,
				pattern: AllReg
			}
		];

		const selectformElements = [
			{
				label: "Example select",
				class: "form-control",
				id: "lang",
				name: "example_select",
				disabledText: "Select ABC",
				required: true,
				value: this.state.example_select,
				option: ["A", "B", "C", "D"]
			},
			{
				label: "Example Numbers",
				class: "form-control",
				id: "lang1",
				name: "example_select2",
				disabledText: "Select Numbers",
				required: true,
				value: this.state.example_select2,
				option: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			}
		];
		const selectradio = [
			{
				classinput: "form-check-input",
				type: "radio",
				name: "exampleRadios",
				id: "exampleRadios1",
				value: "option1",
				classlabel: "form-check-label",
				htmlFor: "exampleRadios1",
				radioName: "Default radio"
			},
			{
				classinput: "form-check-input",
				type: "radio",
				name: "exampleRadios",
				id: "exampleRadios2",
				value: "option2",
				classlabel: "form-check-label",
				htmlFor: "exampleRadios2",
				radioName: "Default option2"
			},
			{
				classinput: "form-check-input",
				type: "radio",
				name: "exampleRadios",
				id: "exampleRadios3",
				value: "option3",
				classlabel: "form-check-label",
				htmlFor: "exampleRadios3",
				radioName: "Default option3"
			}
		];

		const Custom_Button = [
			{
				type: "submit",
				className: "col-lg-4 mt-5",
				variant: "contained",
				color: "secondary",
				btnText: "Submit Form"
			}
		];

		return (
			<React.Fragment>
				<h2>Form Elements</h2>
				<form onSubmit={this.onSubmitContact}>
					<Inputs formElements={formElements} onChange={this.onChange} />
					<Select selectform={selectformElements} onChange={this.onChange} />
					<RadioInput selectradio={selectradio} onChange={this.onChange} />
					<CustomButton Custom_Button={Custom_Button} />
				</form>
			</React.Fragment>
		);
	}
}

import React, { Component } from 'react';
import logo from '../src/images/avatar.png';
import './App.css';
import Inputs from './Component_tab/demo';
import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
import CustomButton from './button';
import { validations } from './GlobleVar';
import Modal from 'react-bootstrap/Modal';
import Singup from './singup';

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				username: '',
				password: ''
			},
			errors: {},
			modalShow: false,
			hide: false
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmitContact = this.onSubmitContact.bind(this);
		this.Onclosemodal = this.Onclosemodal.bind(this);
	}

	onChange = e => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
		this.validateForm();
	};

	onBlur = e => {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
		this.validateForm();
	};

	onSubmitContact = e => {
		e.preventDefault();
		this.setState({
			hide: !this.state.hide
		});
		if (this.validateForm()) {
			const { username, password } = this.state.fields;
			let fields = {};
			fields.username = '';
			fields.password = '';
			if (username === 'balu' && password === 'balu@123') {
				alert('Login SuccessFully');
				this.props.history.push('/');
				this.setState({ fields: fields });
				console.log(this.state.fields);
				const username = this.state.fields.username;
				localStorage.setItem('username', username);
				localStorage.setItem('Logout', 'Logout');
			} else {
				alert('Invalid fields');
				this.setState({ fields: fields });
				console.log(this.state.fields);
			}
		}
	};

	validateForm() {
		const fields = this.state.fields;
		const errors = {};
		let formIsValid = true;

		if (typeof fields.username !== 'undefined') {
			if (!fields.username.match(validations.reges.OnlyAlphabetsReg)) {
				formIsValid = false;
				errors.username = '*Please enter alphabet characters only.';
			}
		}

		if (typeof fields.username !== 'undefined') {
			if (!fields.username) {
				formIsValid = false;
				errors.username = '*Please enter your username.';
			}
		}

		if (typeof fields.password !== 'undefined') {
			if (!fields.password.match(validations.reges.AllReg)) {
				formIsValid = false;
				errors.password = '*Please enter secure and strong password.';
			}
		}

		if (typeof fields.password !== 'undefined') {
			if (fields.password.length < 8) {
				formIsValid = false;
				errors.password = 'Password must be 8 or more characters';
			}
		}

		if (typeof fields.password !== 'undefined') {
			if (!fields.password) {
				formIsValid = false;
				errors.password = '*Please enter your password.';
			}
		}

		this.setState({
			errors: errors
		});

		return formIsValid;
	}
	// componentWillUnmount() {
	// 	console.log(this);
	// }
	Onclosemodal() {
		this.setState({ modalShow: !this.state.modalShow });
	}
	// componentWillReceiveProps(nextProps) {
	// 	console.log('componentWillReceiveProps', nextProps);
	// }
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('componentWillUpdate', nextProps, nextState);
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('componentDidUpdate', prevProps, prevState);
	// }
	render() {
		const formElements = [
			{
				label: 'Username',
				type: 'text',
				autoComplete: 'OFF',
				class: 'form-control',
				errorsBorder: this.state.errors.username,
				placeholder: 'Enter Username',
				name: 'username',
				value: this.state.fields.username,
				errorsSMS: this.state.errors.username
			},
			{
				label: 'Password',
				type: 'password',
				autoComplete: 'OFF',
				class: 'form-control',
				errorsBorder: this.state.errors.password,
				placeholder: 'Enter Password',
				name: 'password',
				value: this.state.fields.password,
				errorsSMS: this.state.errors.password
			}
		];
		const Custom_Button = [
			{
				type: 'submit',
				className: 'col-lg-4 mt-5',
				variant: 'contained',
				color: 'primary',
				btnText: 'Submit'
			}
		];
		return (
			<React.Fragment>
				<div className="offset-lg-3 col-lg-6">
					<div style={{ textAlign: 'center' }}>
						<img
							className="mt-5 "
							src={logo}
							alt="Logo"
							style={{ width: '100px' }}
						/>
					</div>
					<h2 style={{ display: 'none' }}>helloo</h2>
					<form onSubmit={this.onSubmitContact}>
						<Inputs
							formElements={formElements}
							onChange={this.onChange}
							onBlur={this.onBlur}
						/>
						<div className="text-center">
							<CustomButton Custom_Button={Custom_Button} />
						</div>
					</form>

					<div style={{ textAlign: 'center' }}>
						<Button
							onClick={() =>
								this.setState({ modalShow: !this.state.modalShow })
							}>
							Singup
						</Button>
					</div>
				</div>
				<Modal
					show={this.state.modalShow}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header>
						<Modal.Title id="contained-modal-title-vcenter">
							Singup Form
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Singup modalShow={this.Onclosemodal} />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.Onclosemodal}>Close</Button>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default NameForm;

import React, { Component } from "react";
import {
	Route,
	Switch,
	Redirect,
	NavLink,
	BrowserRouter
} from "react-router-dom";
import Home from "./Component_tab/Home";
import Profile from "./Component_tab/Profile";
import Settings from "./Component_tab/Settings";
import FormValidations from "./Component_tab/formValidations";
import "./Component_tab/tab.scss";
// import { Button } from 'react-bootstrap';
// import { Container, Row, Col } from "react-bootstrap";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ContactUs extends Component {
	componentDidMount() {
		document.title = "React Contact";
	}
	constructor() {
		super();
		this.state = {
			// hidden: true,
			array: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
			startDate: new Date()
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});
	}

	// toggle() {
	// 	this.setState({
	// 		hidden: !this.state.hidden
	// 	});
	// }

	render() {
		// var shown = {
		// 	display: this.state.shown ? "block" : "none"
		// };

		// var hidden = {
		// 	display: this.state.hidden ? "block" : "none"
		// };

		// const element = (
		// 	<div>
		// 		<h1>Hello, world!</h1>
		// 		<h2>Today date is:- {new Date().toLocaleDateString()}</h2>
		// 	</div>
		// );
		// const numbers = [
		// 	{
		// 		id: 1,
		// 		name: "Balu",
		// 		age: "20",
		// 		address: "solpaur"
		// 	},
		// 	{
		// 		id: 2,
		// 		name: "Shri",
		// 		age: "25",
		// 		address: "Pune"
		// 	},
		// 	{
		// 		id: 4,
		// 		name: "Shri",
		// 		age: "25",
		// 		address: "Pune"
		// 	}
		// ];

		// const { array } = this.state;

		return (
			<React.Fragment>
				{/* <Container className="mt-5">
					<Row>
						{numbers.map((number, i) => (
							<Col xs={12} sm={6} md={6} lg={4} key={number.id}>
								<div className="shadow  mb-4 bg-white">
									<h1>{i}</h1> <h2> {number.name} </h2> <h3>{number.age}</h3>
									<h3> {number.address}</h3>
								</div>
							</Col>
						))}
					</Row>
				</Container> */}

				<div className="container mt-5">
					{/* <h2>{array.shift()}</h2>
			<h2>{array.unshift('new Item')}</h2> */}
					{/* <h2>{array.pop()}</h2>
			<h2>{array.push('last added')}</h2> */}
					{/* <h2>{array.reverse()}</h2> */}
					{/* <h2>{array.sort()}</h2> */}
					{/* <h2>{this.state.array.reduce( function(a, b) {
			return a + b;
			}, 2)}</h2><br /> */}

					{/* <h2> {array.forEach((a,index) => console.log(index,a)) }
			</h2> */}
					{/* <DatePicker
						selected={this.state.startDate}
						onChange={this.handleChange}
						dateFormat="Pp"
					/> */}

					{/* <h2>{element}</h2> */}
					{/* <h2>It is {new Date().toLocaleDateString()}.</h2> */}
					{/* <h2>{this.state.array}</h2> */}

					{/* <button className="btn btn-primary" onClick={this.toggle.bind(this)}>
						Toggle
					</button> */}
					{/* <h2 style={shown}>hello</h2> */}
					{/* <h2 style={hidden}>hello World</h2> */}
					<BrowserRouter>
						<section className="mb-5">
							<div className="row">
								<div
									className="nav flex-column nav-pills col-lg-2 "
									id="v-pills-tab"
									role="tablist"
									aria-orientation="vertical">
									<NavLink
										className="tab_section mb-2"
										exact
										to="/Contact/Home">
										Home
									</NavLink>
									<NavLink className="tab_section mb-2" to="/Contact/Profile">
										Profile
									</NavLink>
									<NavLink className="tab_section mb-2" to="/Contact/Settings">
										Settings
									</NavLink>
									<NavLink
										className="tab_section mb-2"
										to="/Contact/FormValidations">
										FormValidations
									</NavLink>
								</div>

								<div className="content col-lg-10">
									<Switch path="/Contact/">
										<Route path="/Contact" exact component={Home} />

										<Switch path="/Contact/Home">
											<Route path="/Contact/Home" exact component={Home} />
											<Redirect
												push
												to="/Contact/Home"
												path="*"
												exact={true}
												component={Home}
											/>
										</Switch>
										<Switch path="/Contact/Profile">
											<Route
												path="/Contact/Profile"
												exact
												component={Profile}
											/>
											<Redirect
												push
												to="/Contact/Profile"
												path="*"
												exact={true}
												component={Profile}
											/>
										</Switch>
										<Switch path="/Contact/Settings">
											<Route
												path="/Contact/Settings"
												exact
												component={Settings}
											/>
											<Redirect
												push
												to="/Contact/Settings"
												path="*"
												exact={true}
												component={Settings}
											/>
										</Switch>
										<Switch path="/Contact/FormValidations">
											<Route
												path="/Contact/FormValidations"
												exact
												component={FormValidations}
											/>
											<Redirect
												push
												to="/Contact/FormValidations"
												path="*"
												exact={true}
												component={FormValidations}
											/>
										</Switch>
										<Redirect
											push
											to="/Contact"
											path="*"
											exact={true}
											component={Home}
										/>
									</Switch>
								</div>
							</div>
						</section>
					</BrowserRouter>
				</div>
			</React.Fragment>
		);
	}
}

export default ContactUs;

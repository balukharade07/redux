import React, { Component } from "react";
// import Test from './test';
import AddContact from "./addContact";
// import Contactlist from "./contactlist";
import "../App.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import {Route, NavLink, BrowserRouter} from "react-router-dom";

export default class contacts extends Component {
	componentDidMount() {
		document.title = "React About";
	}

	deleteContact(id) {
		const { contacts } = this.state;
		const newContact = contacts.filter(contact => contact.id !== id);

		this.setState({
			contacts: newContact
		});
	}

	render() {
		//  const { contacts } = this.state;

		return (
			<React.Fragment>
				<div className="container col-lg-12  mt-5 mb-5">
					{/* <Link  to="/About/textfiles" className="nav-link"> <Button className="" variant="contained" color="secondary" >Contact Info</Button></Link> */}

					<Link
						style={{ float: "right" }}
						to="/About/Contactlist"
						className="nav-link">
						{" "}
						<Button className="" variant="contained" color="secondary">
							Contact List
						</Button>
					</Link>
				</div>
				<AddContact
					text="Add Contacts"
					Name="Enter username"
					Age="User name"
					Address="Email"
				/>
			</React.Fragment>
		);
	}
}

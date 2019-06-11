import React, { Component } from 'react';
import LandingPage from './landing-page';
import login from './login';
import Contact from './contact';
import About from './Component/contacts';
import {
	Switch,
	Route,
	NavLink,
	BrowserRouter,
	Redirect
} from 'react-router-dom';
import './App.css';
import logo from '../src/images/React.js_logo-512.png';
import Text from './Component/textfiles';
import Contactlist from './Component/contactlist';
import { Navbar, Nav } from 'react-bootstrap';
import Contactnew from './contactapi';
import Show from './showContact';
import Edit from './editContact';
import Singup from './singup';
import AddConatct from './addConatct';

class header extends Component {
	render() {
		return (
			<header className="App-header ">
				<BrowserRouter>
					<Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
						<NavLink className="navbar-brand ml-5" to="/Home-page">
							{' '}
							<img style={{ width: '55px' }} src={logo} alt="Logo" />
						</NavLink>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<NavLink className="nav-link" exact to="/Home-page">
									Home
								</NavLink>
								<NavLink className="nav-link" to="/About">
									About Us
								</NavLink>
								<NavLink className="nav-link" to="/Contact">
									Contact Us
								</NavLink>
								<NavLink className="nav-link" to="/contactnew">
									List Component
								</NavLink>
							</Nav>
							<Nav className="m-right-5">
								<NavLink className="nav-link" to="/login">
									User login
								</NavLink>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<div className="content">
						<Switch path="/">
							<Route path="/" exact component={LandingPage} />

							<Switch path="/Home-page">
								<Route path="/Home-page" exact component={LandingPage} />
								<Redirect
									push
									to="/Home-page"
									path="*"
									exact={true}
									component={LandingPage}
								/>
							</Switch>

							<Switch path="/contactnew">
								<Route path="/contactnew" exact component={Contactnew} />
								<Route path="/contactnew/AddConatct" component={AddConatct} />
								<Route path="/contactnew/show/:id" component={Show} />
								<Route path="/contactnew/edit/:id" component={Edit} />
								<Redirect
									push
									to="/contactnew"
									path="*"
									exact={true}
									component={Contactnew}
								/>
							</Switch>

							<Switch path="/About">
								<Route path="/About" exact component={About} />
								<Route path="/About/textfiles" component={Text} />
								<Switch path="/About">
									<Route path="/About" exact component={About} />
									<Switch path="/About/Contactlist">
										<Route
											path="/About/Contactlist"
											exact
											component={Contactlist}
										/>
										<Redirect
											push
											to="/About/Contactlist"
											path="*"
											exact={true}
											component={Contactlist}
										/>
									</Switch>

									<Redirect
										push
										to="/About"
										path="*"
										exact={true}
										component={About}
									/>
								</Switch>
							</Switch>

							<Switch path="/login">
								<Route path="/login" exact component={login} />
								<Switch path="/login/singup">
									<Route path="/login/singup" exact component={Singup} />
									<Redirect
										push
										to="/login/singup"
										path="*"
										exact={true}
										component={Singup}
									/>
								</Switch>

								<Redirect
									push
									to="/login"
									path="*"
									exact={true}
									component={login}
								/>
							</Switch>

							<Route path="/Contact" component={Contact} />
							<Redirect
								push
								to="/"
								path="*"
								exact={true}
								component={LandingPage}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</header>
		);
	}
}
export default header;

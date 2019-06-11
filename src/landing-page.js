import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import logo from '../src/images/logo-small.png';

import images1 from "../src/images/bg.jpg";
import images2 from "../src/images/BlenzCoffee.svg";
import images3 from "../src/images/BostonPizza.svg";
import images4 from "../src/images/Travelodge.svg";
import images5 from "../src/images/ashcroft-bw.png";
// import Button from '@material-ui/core/Button';
import "./App.css";

class LandingPage extends Component {
	componentDidMount() {
		document.title = "React Home";
	}

	handleClick() {
		alert("hello");
	}

	render() {
		return (
			<div className="App">
				<div className="row banner_img" />
				<div className="row info_block">
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<img className="img-fluid" src={images1} alt="images1" />
								<p className="comment_title">
									Boomers, Millenials, Gen X - they're all Generation Wireless.
									Offer the essential amenity, on your terms.
								</p>
							</div>
							<div className="col-md-6 offset-md-1">
								<h3 className="title">IS YOUR WIFI WORKING FOR YOU?</h3>
								<p>
									Customers expect WiFi access and you provide it. But what does
									that access provide you?
								</p>
								<p>
									Can you{" "}
									<span className="highlight">promote your company</span>,
									advertise specials, announce something new? Can you pair
									access with a purchase, or place a limit on browsing time?
								</p>
								<p>
									With your online React account you can customize your WiFi
									gateway and <span className="highlight">govern access</span>{" "}
									at any time.
								</p>
								<p>
									Plug in our palm-sized router, and you're good to go. No
									contract, no fine print, just plug and play. And we stand by
									our equipment with a{" "}
									<span className="highlight">lifetime guarantee</span>.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row features_section">
					<div className="container">
						<div className="row">
							<div className="col-md-4 offset-md-2 col-xs-12">
								<div className="feature_block">
									<h3 className="feature_title">Promote</h3>
									<ul className="feature_list">
										<li> New Products</li>
										<li> Services</li>
										<li> Contests</li>
										<li> Upcoming Events</li>
										<li> Advertising and Branding</li>
										<li> Email subscriptions</li>
									</ul>
								</div>
							</div>
							<div className="col-md-4 col-xs-12">
								<div className="feature_block">
									<h3 className="feature_title">Customize</h3>
									<ul className="feature_list">
										<li> Time allotment</li>
										<li> Post-login landing page</li>
										<li> Terms of Use</li>
										<li> Bandwidth limits</li>
										<li> Access modes</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 offset-md-3">
								<span className="learmore_btn">
									Click here to get in touch and learn more about how to
									maximize your WiFi.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="row client_row">
					<div className="container">
						<h3 className="title text-center">Our client</h3>
						<ul className="client_list">
							<li>
								<img className="img-fluid" src={images2} alt="images1" />
							</li>
							<li>
								<img className="img-fluid" src={images3} alt="images1" />
							</li>
							<li>
								<img className="img-fluid" src={images4} alt="images1" />
							</li>
							<li>
								<img className="img-fluid" src={images5} alt="images1" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default LandingPage;

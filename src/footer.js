import React from "react";
import "./App.css";
import logo2 from "../src/images/logo-small-footer.png";
import PropTypes from "prop-types";

const footer = props => {
	const { site, email, address } = props;
	return (
		<React.Fragment>
			<footer className="row">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<img src={logo2} alt="Logo2" />
						</div>
						<div className="col-md-4 text-center">
							<p>{site}</p>
						</div>
						<div className="col-md-4 text-right">
							<p>
								{address}
								{email}
							</p>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default footer;

// Props validations
footer.propTypes = {
	site: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
};

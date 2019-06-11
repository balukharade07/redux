import React, { Component } from "react";
import PropTypes from "prop-types";

class Test extends Component {
	state = {
		showContactInfo: false
	};

	onDelete = () => {
		this.props.deleteClick();
	};

	render() {
		const { contact } = this.props;
		const { showContactInfo } = this.state;

		return (
			<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
				<div className="shadow  mb-4 bg-white">
					<h5>
						{contact.name}{" "}
						<i
							onClick={() =>
								this.setState({ showContactInfo: !this.state.showContactInfo })
							}
							style={{ cursor: "pointer" }}
							className="fa fa-angle-down"
							aria-hidden="true"
						/>{" "}
						<i
							onClick={this.onDelete.bind()}
							style={{
								cursor: "pointer",
								color: "red",
								float: "right",
								fontSize: "24px"
							}}
							className="fa fa-times-circle"
							aria-hidden="true"
						/>
					</h5>

					{showContactInfo ? (
						<ul
							style={{ listStyle: "none", padding: "10px", fontSize: "20px" }}>
							<li>Your city:- {contact.address.city}</li>
							<li>Email :- {contact.email}</li>
						</ul>
					) : null}
				</div>
			</div>
		);
	}
}
Test.propTypes = {
	deleteClick: PropTypes.func.isRequired
};

export default Test;

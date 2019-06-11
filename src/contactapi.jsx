import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getConatcts, deleteConatct } from "./action/contactAction";

class Contactapi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	componentDidMount() {
		this.props.getConatcts();
	}
	onChange = e => {
		this.setState({ search: e.target.value });

		console.log(this.state.search);
	};
	deleteContact(id) {
		this.props.deleteConatct(id);
	}
	render() {
		const { contacts } = this.props;
		const Custom_Button = [
			{
				type: "submit",
				variant: "contained",
				color: "secondary",
				btnText: "Contact View"
			}
		];
		const Custom_ButtonPri = [
			{
				type: "submit",
				variant: "contained",
				color: "primary",
				btnText: "Contact Edit"
			}
		];

		return (
			<React.Fragment>
				<div className="mt-5  offset-lg-4 col-lg-4">
					<form>
						<input
							type="text"
							style={{ textAlign: "center" }}
							className="form-control"
							placeholder="Search Users"
							onChange={this.onChange.bind(this)}
							name="search"
							value={this.state.search}
						/>
					</form>
				</div>
				<Link to={"/contactnew/AddConatct"} className="nav-link">
					<div style={{ textAlign: "center" }}>
						<button className="btn btn-primary" variant="primary">
							Add Conatct
						</button>
					</div>
				</Link>

				<div className="container row mt-5 mb-5">
					{contacts.map((item, index) => (
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={index}>
							<div className="shadow  mb-4 bg-white">
								<p>
									{item.name}
									<span
										onClick={this.deleteContact.bind(this, item.id)}
										style={{
											cursor: "pointer",
											color: "red",
											float: "right",
											fontSize: "24px"
										}}
										className="fa fa-times-circle"
										aria-hidden="true"
									/>
								</p>
								<p>{item.email}</p>
								<Link to={"/contactnew/show/" + item.id} className="nav-link">
									<CustomButton Custom_Button={Custom_Button} />
								</Link>
								<Link to={"/contactnew/edit/" + item.id} className="nav-link">
									<CustomButton Custom_Button={Custom_ButtonPri} />
								</Link>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}

Contactapi.propTypes = {
	contacts: PropTypes.array.isRequired,
	getConatcts: PropTypes.func.isRequired,
	deleteConatct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	contacts: state.contact.contacts
});

export default connect(
	mapStateToProps,
	{ getConatcts, deleteConatct }
)(Contactapi);

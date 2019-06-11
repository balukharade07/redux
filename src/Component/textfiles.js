import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default class textfiles extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container col-lg-10 mt-5 mb-5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</div>

				<div className="container col-lg-12 text-right mt-5 mb-5">
					<Link to="/About" className="nav-link">
						{" "}
						<Button className="" variant="contained" color="default">
							About Info
						</Button>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}

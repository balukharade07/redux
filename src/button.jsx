import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class button extends Component {
	render() {
		const { Custom_Button } = this.props;
		return (
			<React.Fragment>
				{Custom_Button.map((value, index) => (
					<Button
						key={index}
						type={value.type}
						className={value.className}
						variant={value.variant}
						color={value.color}>
						{value.btnText}
					</Button>
				))}
			</React.Fragment>
		);
	}
}

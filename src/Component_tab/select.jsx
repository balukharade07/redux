import React, { Component } from "react";

export default class select extends Component {
	render() {
		const { selectform, onChange } = this.props;
		return (
			<React.Fragment>
				{selectform.map((value, index) => (
					<div className="form-group" key={index}>
						<label htmlFor={value.id}>{value.label}</label>
						<select
							className={value.class}
							id={value.id}
							value={value.value}
							name={value.name}
							required={value.required}
							onChange={onChange}>
							<option disabled value="" hidden>
								{value.disabledText}
							</option>
							{value.option.map((newValue, index) => (
								<option key={index} value={newValue}>
									{newValue}
								</option>
							))}
						</select>
					</div>
				))}
			</React.Fragment>
		);
	}
}

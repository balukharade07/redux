import React, { Component } from 'react';
import '../App.css';

export default class demo extends Component {
	render() {
		const { formElements, onChange, onBlur } = this.props;

		return (
			<React.Fragment>
				{formElements.map((value, index) => (
					<div className="form-group" key={index}>
						<label htmlFor={value.label}>{value.label}</label>
						<input
							type={value.type}
							autoComplete={value.autoComplete}
							// className={value.class}
							placeholder={value.placeholder}
							className={
								value.errorsBorder ? 'form-control is-invalid' : value.class
							}
							name={value.name}
							value={value.value}
							required={value.required}
							onChange={onChange}
							onBlur={onBlur}
							pattern={value.pattern}
						/>
						<div className="errorMsg">{value.errorsSMS}</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}

import React from "react";

const editinput = props => {
	const { formElements, onChange } = props;
	return (
		<React.Fragment>
			{formElements.map((value, index) => (
				<div className="form-group" key={index}>
					<label>{value.label}</label>
					<input
						type={value.type}
						autoComplete={value.autoComplete}
						className={value.class}
						placeholder={value.placeholder}
						name={value.name}
						defaultValue={value.defaultValue}
						required={value.required}
						onChange={onChange}
						pattern={value.pattern}
					/>
				</div>
			))}
		</React.Fragment>
	);
};

export default editinput;

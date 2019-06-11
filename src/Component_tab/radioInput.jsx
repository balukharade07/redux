import React, { Component } from "react";

export default class radioInput extends Component {
	render() {
		const { selectradio, onChange } = this.props;
		return (
			<React.Fragment>
				<div className="form-group">
					{selectradio.map((value, index) => (
						<div className="form-check" key={index}>
							<input
								className={value.classinput}
								type={value.type}
								name={value.name}
								id={value.id}
								value={value.value}
								onChange={onChange}
							/>
							<label className={value.classlabel} htmlFor={value.id}>
								{value.radioName}
							</label>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}

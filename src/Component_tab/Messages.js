import React, { Component } from "react";

export default class Messages extends Component {
	onClick(id) {
		this.props.onClick(id);
	}
	render() {
		const { boxdata } = this.props;
		return (
			<React.Fragment>
				{boxdata.map((value, index) => (
					<div className="col-lg-4" key={index}>
						<div className="shadow  mb-4 bg-white">
							<h2 onClick={this.onClick.bind(this, value.h2)}>{value.h2}</h2>
							<div style={{ textAlign: "center" }}>
								<img
									className="img-fluid"
									src={value.img}
									style={{ width: "200px" }}
									alt={value.img}
								/>
							</div>
							<div>{value.text}</div>
							<h3>{value.name}</h3>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}

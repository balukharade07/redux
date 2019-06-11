import React, { Component } from "react";

export default class ui2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectbox1: "",
			selectbox2: "",
			filelog: "",
			file: "",
			numbers: []
		};
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
		if (this.state.selectbox1 === "NMEA") {
			this.setState({
				numbers: ["5/second", "2/second"]
			});
		} else if (this.state.selectbox1 === "NAVCOM") {
			this.setState({
				numbers: ["1/second", "0.5/second", "0.1/second"]
			});
		} else {
			this.setState({
				numbers: []
			});
		}
	};

	onSubmit(e) {
		e.preventDefault();
	}
	render() {
		// const numbers = ["abc", "abc2"];
		return (
			<div className="container mt-5 shadow  mb-4 bg-white">
				<h3>Login Status</h3>

				<div className="mt-5 mb-3">
					<i
						className="fa fa-times-circle"
						style={{ color: "red", fontSize: "28px" }}
						aria-hidden="true"
					/>{" "}
					<span className="ml-3">Not logging</span>
				</div>
				<div className="mb-3">
					<i
						className="fa fa-check-circle"
						style={{ color: "green", fontSize: "28px" }}
						aria-hidden="true"
					/>{" "}
					<span className="ml-3">SD Card inserted</span>
				</div>
				<div>
					<i
						className="fa fa-info-circle"
						style={{ color: "blue", fontSize: "28px" }}
						aria-hidden="true"
					/>{" "}
					<span className="ml-3">
						Memory Free: 7640MB, used: 360MB, Total: 8000MB
					</span>
				</div>
				<form style={{ padding: "20px 0px" }} onSubmit={this.onSubmit}>
					<div className="form-group row">
						<div className="col-lg-4 pl-0 mb-3">
							<label className="col-md-6 form-control-label" htmlFor="select">
								Logging Type
							</label>
							<div className="col-md-9 pr-0">
								<select
									id="select"
									name="selectbox1"
									value={this.state.selectbox1}
									onChange={this.onChange.bind(this)}
									className="form-control">
									<option value="" disabled>
										Logging Type
									</option>
									<option value="NMEA">NMEA</option>
									<option value="NAVCOM">NAVCOM</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4 pl-0">
							<label className="col-md-6 form-control-label" htmlFor="select">
								Logging Rate
							</label>
							<div className="col-md-9 pr-0">
								<select
									id="select"
									name="selectbox2"
									value={this.state.selectbox2}
									onChange={this.onChange.bind(this)}
									className="form-control">
									<option value="" disabled>
										Logging Rate
									</option>
									{this.state.numbers.map((number, i) => (
										<option key={i} value={number}>
											{number}
										</option>
									))}
									{/* <option value="5/second">5/second</option>
									<option value="2/second">2/second</option>
									<option value="1/second">1/second</option>
									<option value="0.5/second">0.5/second</option>
									<option value="0.1/second">0.1/second</option> */}
								</select>
							</div>
						</div>
					</div>

					<div className="mt-3 mb-3 row">
						<h6 className="col-lg-3">New LogFile Name</h6>
						<div className="col-lg-3">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									autoComplete="OFF"
									id="Logtxt"
									placeholder="Enter log file"
									value={this.state.filelog}
									name="filelog"
									onChange={this.onChange}
								/>
							</div>
						</div>
					</div>
					<div className="mt-3 mb-3 row">
						<h6 className="col-lg-3">Log Duration (min)</h6>
						<div className="col-lg-3">
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									autoComplete="OFF"
									id="Logtxt"
									placeholder="Enter Log Duration"
									value={this.state.file}
									name="file"
									onChange={this.onChange}
									// defaultValue="0"
								/>
							</div>
						</div>
					</div>

					<div className="col-lg-12 mb-3 row text-center">
						<button
							type="submit"
							className="btn btn-primary mt-3 mb-3 col-lg-2">
							Start Log
						</button>
						<button
							type="button"
							className="btn btn-primary mt-3 mb-3 offset-lg-2 col-lg-2">
							Stop Log
						</button>
					</div>
				</form>
				<div className="col-lg-6">
					<h3>Log Files</h3>
					<form style={{ padding: "20px 0px" }}>
						<label
							className="col-md-6 pl-0 form-control-label"
							htmlFor="select">
							Log Files
						</label>
						<select multiple name="select" className="form-control">
							<option value="1">Option #1</option>
							<option value="2">Option #2</option>
							<option value="3">Option #3</option>
							<option value="4">Option #4</option>
							<option value="5">Option #5</option>
							<option value="6">Option #6</option>
						</select>
						<button type="button" className="btn btn-primary mt-4 mb-3">
							Download Selected
						</button>
						<br />
						<button type="button" className="btn btn-primary mt-3 mb-3">
							Delete Selected
						</button>
					</form>
				</div>
			</div>
		);
	}
}

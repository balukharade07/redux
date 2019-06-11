import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ui extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "block",
			btnText: "Next",
			bgBox: "#fff",
			newTitle: this.props.title,
			classs: "btn btn-primary",
			textName: {
				name: "validations",
				color: "blue"
			},
			counter: this.props.count,
			isShow: true
		};
		this.handleNvEnter = this.handleNvEnter.bind(this);
		this.handleNvLeave = this.handleNvLeave.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.setState(prevState => ({
			counter: prevState.counter + 1
		}));

		if (this.state.display === "block") {
			this.setState({
				display: "none",
				btnText: "Back",
				classs: "btn btn-danger",
				newTitle: "Change to State",
				textName: {
					name: "validations React js ",
					color: "green"
				}
			});
		} else if (this.state.display === "none") {
			this.setState({
				display: "block",
				btnText: "Next",
				classs: "btn btn-primary",
				newTitle: this.props.title,
				textName: {
					name: "validations",
					color: "blue"
				}
			});
		}
	}

	componentWillMount() {
		console.log("componentWillMount");
	}

	componentDidMount() {
		console.log("componentDidMount");
		const Collaps2 = document.getElementById("Collaps");
		Collaps2.addEventListener("mouseenter", this.handleNvEnter);
		Collaps2.addEventListener("mouseleave", this.handleNvLeave);
		Collaps2.addEventListener("click", this.handleNvEnter);
	}
	handleNvEnter() {
		const Collaps2 = document.getElementById("Collaps");
		Collaps2.style.color = "orange";
	}
	handleNvLeave() {
		const Collaps2 = document.getElementById("Collaps");
		Collaps2.style.color = "#000";
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
		document.removeEventListener("click", this.handleNvEnter);
	}
	//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps", nextProps);
	}
	//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
	componentWillUpdate(nextProps, nextState) {
		console.log("componentWillUpdate", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate", prevProps, prevState);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate");
		return (
			this.props.name !== nextProps.name ||
			this.state.counter !== nextState.counter
		);
	}

	render() {
		console.log("render");
		const stylebtn = {
			btnStyle: {
				color: "#fff"
			},
			h2Style: {
				color: "#fff"
			}
		};

		return (
			<React.Fragment>
				<h3 style={{ color: this.state.textName.color }}>
					{this.state.textName.name}
				</h3>
				<h2 style={{ display: this.state.display }}>Pune</h2>
				{/* <h2 style={{ color: this.state.textName.color }}>{textNew}</h2> */}
				<button
					style={stylebtn.btnStyle}
					className={this.state.classs}
					onClick={this.onClick.bind(this)}>
					{this.state.btnText}
				</button>
				<h2>{this.state.newTitle}</h2>
				<h3>{this.state.counter}</h3>
				<h5 id="Collaps">Collapsible Group Item</h5>

				<button
					className="btn btn-success"
					onClick={() =>
						this.setState({
							isShow: !this.state.isShow
						})
					}>
					SHOW
				</button>
				{this.state.isShow ? (
					<div>
						<h2>sdfsdgf</h2>
						<h3>sdhfiusdhfuisd</h3>
					</div>
				) : null}
			</React.Fragment>
		);
	}
}
ui.defaultProps = {
	name: "Hello",
	message: "abcd",
	count: 0
};

ui.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
};

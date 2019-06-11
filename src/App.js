import React, { Component } from "react";

import "./App.css";
import Footer from "./footer";
import Header from "./header";
import { Provider } from "react-redux";
import store from "./store";
// import UI from "./ui";
// import RegisterForm from "./RegisterForm";
// import Child from "./childToParent";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		count: 0,
	// 		name: "Add One More"
	// 	};
	// 	this.outputEvent = this.outputEvent.bind(this);
	// }

	// outputEvent() {
	// 	// the event context comes from the Child
	// 	if (this.state.name === "Reset") {
	// 		this.setState({
	// 			count: 0,
	// 			name: "Add One More"
	// 		});
	// 	} else if (this.state.name === "Add One More") {
	// 		if (this.state.count === 10) {
	// 			alert("Max 10 count");
	// 			this.setState({
	// 				name: "Reset"
	// 			});
	// 			return false;
	// 		} else {
	// 			this.setState({
	// 				count: this.state.count + 1
	// 			});
	// 		}
	// 	}
	// }

	componentDidMount() {
		document.title = "React Applications";
	}
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Header />
					<Footer
						site="© 2019 React Applications All Rights Reserved."
						email="Email: info@ReactApplications.com"
						address="Kelowna, British Columbia, V1P Contact No: 1.250.469.9632,"
					/>
					{/* <UI title="Send To Parent" /> */}

					{/* <Child
					clickHandler={this.outputEvent}
					count={this.state.count}
					btnName={this.state.name}
				/> */}
					{/* <RegisterForm /> */}
					{/* <Child /> */}
				</div>
			</Provider>
		);
	}
}

export default App;

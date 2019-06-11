import React, { Component } from 'react';
import '../App.css';


function validateForm(email, password) {
    // true means invalid, so our conditions got reversed
    return {
      email: email.length === 0,
      password: password.length === 0,
    };
  }


export default class validate extends Component {
   constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      
      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: '',
    };
    
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }
  
  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }
  
  handleSubmit(evt) {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  }
  
  canBeSubmitted() {
    const errors = validateForm(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  
  render() {
    const errors = validateForm(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={errors.email ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          className={errors.password ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    )
  }
}

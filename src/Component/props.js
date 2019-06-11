import React, { Component } from 'react'
import Test from './test'

export default class props extends Component {
    
    render() {
   
    return (
      <div>
        <Test name="Balu Kharade" age={25} address="Solpaur"/>
        <Test name="shri" age={25} address="Pune"/>
      </div>
    )
  }
}

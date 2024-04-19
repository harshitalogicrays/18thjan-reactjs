import React, { Component } from 'react'

class ClassCompDemo extends Component {
  render() {
    return (
     <>
        <h1>Hello Class Comp</h1>
        <h2>{JSON.stringify(this.props)}</h2>
        <h3>{this.props.address}</h3>
     </>
    )
  }
}
export default  ClassCompDemo
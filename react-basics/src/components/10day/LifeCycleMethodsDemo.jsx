import React, { Component} from 'react'

export default class LifeCycleMethodsDemo extends Component {
    constructor(props) {
      super(props)
      console.log("constructor called")
      this.state = { name:"RAM"  }
      this.focusRef=React.createRef()
    }
    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProps called")
        return {state}
    }
    componentDidMount(){
        console.log("componentDidMount called")
        this.focusRef.current.focus()
    }
    handleChange=()=>{
        console.log("handlechange called")
        this.setState({name:"Meera"})
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    console.log("render called")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" className="btn btn-primary" onClick={this.handleChange} > Change Name    </button>
        
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" ref={this.focusRef} />
        </div>
        
      </div>
    )
  }


}

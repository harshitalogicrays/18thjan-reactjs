import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


export default class ClassCompDemo1 extends Component {
constructor(props) {
  super(props)
  this.state = { uname:this.props.username,login:false, emp:{id:"",name:"",sal:""}}
}
 handleBtn(){ alert("clicked");  this.setState({login:false}) }

 handleBtn1=()=>{
  this.setState({uname:"Sad",login:!this.state.login})

 }
  render() {
    let {username,address}=this.props
    let {uname,login}=this.state
    return (
      <div>
         {JSON.stringify(this.props)}<br/>
         <h1>{username}</h1>
         <Button onClick={this.handleBtn} className='mb-3'>click me</Button><br/>
         <Button onClick={this.handleBtn1}>State value change</Button><br/>

        {this.state.login ?<>{uname=="Sad1" ? 'ok' :'not ok'}</> : 
                          <>{uname=="Happy" && <>Welcome {uname}</>}</>}
         

      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'
export default class signup extends Component {
    state={
        name:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        axios.post("https://backendapi-ah81.onrender.com/store",{username:this.state.name,password:this.state.password})
        .then((res)=>{
            console.log(res)
        })
    //     fetch("https://backend-bbcw.onrender.com/add",{
    //     method:"POST",
    //     headers:{
    //       "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({
    //       username:this.state.name,
    //       password:this.state.password,

    //     })
    //   })
    //   .then((res)=>{
    //     console.log(res)
    //   })

    }

  render() {
    return (
      <div>
         <p><input onChange={this.handleChange} value={this.state.name} name="name" placeholder='enter username'/></p>
        <p><input onChange={this.handleChange} value={this.state.password} name='password' placeholder='enter password'/></p>
        <p><button onClick={this.handleClick}>Submit</button></p>
      </div>
    )
  }
}

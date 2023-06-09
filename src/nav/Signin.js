import axios from 'axios'
import React, { Component } from 'react'
export default class signin extends Component {
    // state={
    //     name:"",
    //     lastname:"",
    //     fathername:"",
    //     mothername:"",
    //     phno:""
    // }
    // handleChange=(e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    
    // }
    // handleClick=()=>{
    //     // console.log(this.state.name)
    //     console.log(this.state)
    // }
    state={
      users:[]
    }
    componentDidMount(){
      axios.get("https://backendapi-ah81.onrender.com/user")
      .then((res)=>{
        console.log(res.data)
        this.setState({
          users:res.data
        })
      })
    }


  render() {
    return (
      <div>
        {
          this.state.users.map((usr)=>(
            <div key={usr._id}>
              <p>name:{usr.username}</p>
              <p>password:{usr.password}</p>
            </div>
          ))
        }
        
      </div>
    )
  }
}

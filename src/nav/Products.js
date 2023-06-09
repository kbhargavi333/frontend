import React, { Component } from 'react'

export default class Retrieve extends Component {
    state={
        details:[]
    }
    componentDidMount(){
        fetch("https://backend-bbcw.onrender.com/products")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            this.setState({
                details:res
            })
        })
    }
  render() {
    return (
      <div>
        <h1>details</h1>
        {
            this.state.details.map((det)=>(
                <div key={det.name}>
                    <p>{det.name}</p>
                    <p>{det.price}</p>
                    <img width="5%" src={det.image} alt={det.name}/>
                </div>
            ))
        }
      </div>
    )
  }
}

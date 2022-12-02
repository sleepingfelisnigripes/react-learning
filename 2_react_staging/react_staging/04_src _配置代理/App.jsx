import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {
  getStudentData = ()=>{
    // 考虑跨域的问题(5001->3000)，能发送，但是数据回不来，ajax会拦截 ->解决方法，在react脚手架里面通过代理解决，代理是开在3000端口的
    // 代理方法：在package.json最后加一句 "proxy":"http://localhost:5001"
    axios.get('http://localhost:3000/api1/students').then(
      response => {console.log('successful',response.data);},
      error => {console.log('failed',error);}
    )
  }
  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response => {console.log('successful',response.data);},
      error => {console.log('failed',error);}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>click me get student data</button>
        <button onClick={this.getCarData}>click me get car data</button>
      </div>
    )
  }
}

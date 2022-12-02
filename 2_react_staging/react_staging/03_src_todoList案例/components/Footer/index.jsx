import React, { Component } from 'react'
import './index.css'; 

export default class Footer extends Component {

  //全选checkbox的回调
  handleCheckAll = (event)=>{
    this.props.checkAllTodos(event.target.checked)
  }

  //清除已完成任务的回调
  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props
    //finished tasks count
    const doneCount = todos.reduce((pre,current)=>{return pre+(current.done?1:0)},0)
    //可以简写成const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0）
    //total tasks count
    const total = todos.length
    return (
      <div className='todo-footer'>
        <label> 
          <input type='checkbox' onChange={this.handleCheckAll} checked={doneCount===total&&total!==0?true:false} />{/*不能用defaultchecked，这个只有在第一次的时候有效果*/}
        </label>
        <span>
          <span>finish{doneCount}</span> / total{total}
        </span>
        <button onClick={this.handleClearAllDone} className='btn btn-danger'>clear finished tasks</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css';

export default class Item extends Component {

  state = {
    mouse:false //标识鼠标移入,移出
  }

  //鼠标移入，移出的回调
  handleMouse = (flag)=>{
    return ()=>{
      //console.log(flag);
      this.setState({mouse:flag})
    }
  }

  //勾选、取消勾选某一个doto的回调
  handleCheck = (id)=>{
    return(event)=>{
      //console.log(event.target.checked);//因为是checkbox所以不是value值而是checked值
      this.props.updateTodo(id,event.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id)=>{
    //console.log("tell App to delete this todo")
    if(window.confirm('Confirm delete?')){
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
          <label>
            <input type='checkbox' checked={done} onChange={this.handleCheck(id)}/>
            {/* checked之后不能更改，defaultchecked之后还可以更改 */}
            <span>{name}</span>
          </label>
          <button onClick={()=>{this.handleDelete(id)}} className='btn btn-danger' style={{display:mouse?'block':'none'}}>delete</button>
      </li>
    )
  }
}

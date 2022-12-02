import React, { Component } from 'react'
import {nanoid} from 'nanoid';//或者用uuid生成唯一的key 
import {PropTypes} from 'prop-types';
import './index.css';

export default class Header extends Component {

  //对接收的props进行类型以及必要性的种类限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  
  //键盘事件的回调
  handleKeyup = (event)=>{
    //解构赋值获取keyCode,target
    const {keyCode, target} = event
    //判断是否是回车按键/ /console.log(target.value,event.keyCode);//判断enter按键的编号
    if(keyCode !== 13) return
    //添加的todo名字不能为空
    if(target.value.trim()===''){
      alert('Input cannot be empty!')
      return
    }
    //准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    //将todoObj传给App 
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }


  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleKeyup} type='text' placeholder="Please input task name, press 'Enter' to confirm."/>
      </div>
    )
  }
}

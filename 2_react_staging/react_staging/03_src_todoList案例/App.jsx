import React, {Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

//创建并暴露App组件
export default class App extends Component{
  //状态在哪里，操作状态方法在哪里

  //初始化状态
  state = {
    todos:[
      {id:'001',name:'eat',done:true},
      {id:'002',name:'sleep',done:true},
      {id:'003',name:'coding',done:false},
    ]
  }

  //`addTodo` is used to add a new todo, todoObj is an object
  addTodo = (todoObj)=>{
    //获取原来的todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  //updateTodo用于更新一个todo对象
  updateTodo = (id,done)=>{
    //获取原来状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //deleteTodo用于删除一个todo对象
  deleteTodo = (id)=>{
    //获取原来状态中的todos
    const {todos} = this.state
    //删除指定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //checkAllTodo用于全选todo对象
  checkAllTodos = (done)=>{
    //获取原来状态中的todos
    const {todos} = this.state
    //加工数据
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //clearAllDone用于清除所有已完成的
  clearAllDone = ()=>{
    //获取原来状态中的todos
    const {todos} = this.state
    //过滤数据
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    //更新状态
    this.setState({todos:newTodos})
  }
  
  render(){
    const {todos} = this.state
    return(
      //因为APP.js是外壳，所以不要在div里面直接写东西，而是在div里面引用其他组件的标签
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo = {this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PubSub from 'pubsub-js' 
import './index.css'

//List要展示：1.users 2.first time information 3.loading 4.err
export default class List extends Component {
  
  //初始化状态
  state = {
    users:[],//users初始值为数组
    isFirst: true,//是否为第一次打开界面
    isLoading: false,//标识是否处在加载中
    err:'',//存储请求相关错误信息
  } 

  componentDidMount(){
    this.token = PubSub.subscribe('atguigu',(msg,stateObj)=>{
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className='row'>
        {
          isFirst ? <h2>Welcome! Input keyword and click 'search'</h2> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=>{
            return (
              <div className='card' key={userObj.id}>
                <a rel='noreferrer' href={userObj.html_url} target='_blank'>
                  <img src={userObj.avatar_url} style={{width:'100px'}} alt="avatar"/>
                </a>
                <p className='card-text'>{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
 
import axios from 'axios'
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class Search extends Component {
  search = () =>{
    //获取用户的输入(连续解构赋值+重命名)
    const {keyWordElem:{value:keyWord}} = this
    
    //发送请求前通知List更新状态
    /* this.props.updateAppState({isFirst:false,isLoading:true}) */
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    
    //发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        //请求成功后通知app更新状态
        /* this.props.updateAppState({isLoading:false,users:response.data}) */
        PubSub.publish('atguigu',{isLoading:false,users:response.data})
      },

      error => {
        //失败后通知app更新状态
        /* this.props.updateAppState({isLoading:false,err:error.message}) */
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
        
      }
    )
  }
  render() {
    return (
        <section className='jumbotron'>
            <h3 className='jumbortron-heading'>Search Github Users</h3>
            <div>
                <input ref={c=>this.keyWordElem = c} type="text" placeholder='enter the name you search'/>&nbsp;
                <button onClick={this.search}>search</button>
            </div>
        </section>
    )
  }
}
//import axios from 'axios'
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class Search extends Component {
  search = async () =>{
    //获取用户的输入(连续解构赋值+重命名)
    const {keyWordElem:{value:keyWord}} = this
    
    //发送请求前通知List更新状态
    /* this.props.updateAppState({isFirst:false,isLoading:true}) */
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})
    //#region 发送网络请求--使用axios
    //发送网络请求
    /* axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        //请求成功后通知app更新状态
        //this.props.updateAppState({isLoading:false,users:response.data}) 
        PubSub.publish('atguigu',{isLoading:false,users:response.data})
      },

      error => {
        //失败后通知app更新状态
        //this.props.updateAppState({isLoading:false,err:error.message})
        PubSub.publish('atguigu',{isLoading:false,err:error.message})
        
      }
    ) */
    //#endregion
     
    //发送网络请求--使用fetch(未优化)
    /* fetch(`/api1/search/users?q=${keyWord}`).then(
      response => {
        console.log('server connects successfully');
        return response.json()
      },
      error => {
        console.log("server connects failed",error);
        return new Promise(()=>{})//返回初始化的Promise终止Promise链
      } 
    ).then(
      response => {console.log('get data successfully',response);},
      error => {console.log("get data failed",error);}
    ) */

    //发送网络请求--使用fetch(优化)
    /* fetch(`/api1/search/users?q=${keyWord}`).then(
      response => {
        console.log('server connects successfully');
        return response.json()
      }
    ).then(
      response => {console.log('get data successfully',response);}
    ).catch(
      (error) => {console.log('请求出错',error);}
    ) */

    //发送网络请求--使用fetch(进一步优化)(关注分离)
    try{
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data.items);
      PubSub.publish('atguigu',{isLoading:false,users:data.items})
    }catch (error){
      console.log('请求出错',error);
      PubSub.publish('atguigu',{isLoading:false,err:error.message})
    }
    
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
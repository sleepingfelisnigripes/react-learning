import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
  search = () =>{
    //获取用户的输入(连续解构赋值+重命名)
    //console.log(this.keyWordElem.value);//写法一
    //const {value} = this.keyWordElem //写法二
    //写法三: 连续结构赋值+重命名，这样value就重命名成了name
    const {keyWordElem:{value:keyWord}} = this
    //发送请求前通知app更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    console.log(keyWord);
    //发送网络请求
    //github过多请求可能会让github认为有问题而拒绝返回值
    //方法是写一个代理5003，让他get github数据，成功的话发回给3000，失败的话返回一个伪造的固定的数据
    //3000给github发，主机名端口号都不一样，为什么没有跨域问题？github服务器用cors解决跨域 
    //axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //可以省略`http://localhost:3000/api1/search/users?q=${keyWord}`到`/api1/search/users?q=${keyWord}`
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        console.log('successful',response.data.items);
        //请求成功后通知app更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error => {
        console.log('failed',error);
        //失败后通知app更新状态
        this.props.updateAppState({isLoading:false,err:error.message})
        //不能直接存对象，而是要存对象身上的信息
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
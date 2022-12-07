import React,{useState} from 'react'
import { Link, Outlet, useNavigate} from 'react-router-dom'
//Navigate是一个组件，渲染到结构当中，用于视图的切换
//useNavigate是一个hook，是一个函数需要调用

export default function Message() {
  const [messages] = useState([
    {id:'001',title:"消息1",content:"锄禾日当午"},
    {id:'002',title:"消息2",content:"汗滴禾下土"},
    {id:'003',title:"消息3",content:"谁知盘中餐"},
    {id:'004',title:"消息4",content:"粒粒皆辛苦"},
  ])
  const navigate = useNavigate() //编程式路由导航
  function showDetail(m){
    console.log('m',m)
    //不能用Link，因为Link和NavLink需要渲染到页面上形成a标签，点击a标签才能跳转。
    //Navigate不行是因为Navigate要写在页面上才能实现，是一个组件，渲染到结构当中，用于视图的切换
    //要用useNavigate，可以传递两个参数，第一个是路径，第二个是page对象
    //子路由不能带斜杠，因为detail是子路由
    navigate('detail',{
      replace: false, //跳转模式
      state:{
        id:m.id,
        title:m.title,
        content:m.content
      }
    })
  }
  return (
    <div>
        <ul>
            {
                messages.map((m)=>{
                    return(
                        //路由链接
                        <li key={m.id}>
                          {/* state参数 */}
                            <Link 
                              to="detail" 
                              state={{
                                id: m.id,
                                title: m.title,
                                content:m.content,
                              }}
                            >{m.title}</Link>&nbsp;&nbsp;
                            <button onClick={()=>showDetail(m)}>see details</button>
                        </li>
                    )
                })
            }
        </ul>
        <hr/>
        {/* 指定路由组件的展示位置 */}
        <Outlet/>
    </div>
  )
}

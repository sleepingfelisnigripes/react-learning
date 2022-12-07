import React from 'react'
import { NavLink, useRoutes, useInRouterContext} from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'


export default function App() {

  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  //如果组件在<Router>的上下文呈现，则useInRouterText返回真，否则返回假
  // 就是包裹在BrowserRouter中的就是
  console.log("useInRouterContext",useInRouterContext())
  return (
    <div>
      <div className="row">
        <Header/>
			</div>
			<div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">

            {/* 原生html中，靠<a>跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
            <NavLink className='list-group-item' to="/about">About</NavLink>
            <NavLink className='list-group-item' end to="/home">Home</NavLink>
            {/* 在to前面加end,选择子标签页的时候只有子页面标签高亮，父标签不会*/}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              
              {/* 注册路由 */}
              {/* <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/> */}
              {/* <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/' element={<Navigate to='about'/>}></Route>
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
			</div>
    </div>
  )
}

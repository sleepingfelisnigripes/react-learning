import React from 'react'
import { NavLink,Outlet, useOutlet} from 'react-router-dom'

export default function Home() {
    //useOutlet()作用是用来呈现当前组件中渲染的嵌套路由。
    console.log("useOutlet",useOutlet())
    return (
        <div>
            <h3>Home组件内容</h3>
            <div>
                <ul className='nav nav-tabs'>
                    <li>
                        <NavLink className='list-group-item' to='news'>news</NavLink>
                    </li>
                    <li>
                        <NavLink className='list-group-item' to='message'>message</NavLink>
                    </li>
                </ul>
                {/* 指定路由组件呈现的位置 */}
                <Outlet/>
            </div>
        </div>
    )
}
   
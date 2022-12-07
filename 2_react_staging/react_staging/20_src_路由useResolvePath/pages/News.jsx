import React from 'react'
import { useNavigationType, useResolvedPath } from 'react-router-dom'

export default function News() {
  //useNavigationType()作用是返回当前的导航类型（用户是如何来到当前界面的）
  //返回值是pop, push, replace
  //pop是指在浏览器中直接打开了这个路由组件(刷新页面).
  console.log(useNavigationType())//这块是push

  //useResolvePath()作用是给定一个URL值，解析其中的: path, search, hash值
  console.log(useResolvedPath('/user?id=001&name=tom#qwe'))
  return (
    <div>
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    </div>
  )
}
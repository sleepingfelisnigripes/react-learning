import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const {state:{id,title,content}} = useLocation()
  console.log(useLocation());
   //search参数获取
  return (
    <div>
        {<ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>}
    </div>
  )
}

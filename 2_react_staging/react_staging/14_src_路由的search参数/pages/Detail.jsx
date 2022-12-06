import React from 'react'
import { useSearchParams, useLocation} from 'react-router-dom'

export default function Detail() {
  
   //searchc参数获取
  const [search,setSearch] = useSearchParams();
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  //也可以用
  //useLocation().search
  return (
    <div>
        <ul>
            <li>
              <button onClick={()=>{setSearch('id=008&title=haha&content=xixi')}}>点我更新一下收到的search参数</button>
            </li>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    </div>
  )
}

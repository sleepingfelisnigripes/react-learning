import React,{useState} from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
    const [sum,setSum] = useState(1)
    return (
        <div>
            <h3>我是home的内容</h3>
            {sum===2 ? <Navigate to='/about'/> : <h4>当前sum值是：{sum}</h4>}
            {/* <Navigate to='/about' replace={true}/> 默认是false，这块如果是true的话则在history中替换，不能返回上一页面*/}
            <button onClick={()=>setSum(2)}>点我sum将变成2</button>
            {/* 这是因为setSum()加括号了，等于直接调用，加一个箭头函数就会执行箭头函数，然后返回执行的方法*/}
        </div>
    )
}
   
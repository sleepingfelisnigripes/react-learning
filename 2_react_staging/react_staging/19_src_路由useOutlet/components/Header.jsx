import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  //注意只能用state参数，不能用其他参数param等实现参数
  function back(){
    navigate(-1)
  }
  function forward(){
    navigate(1)
  }
  return (
    <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={back}>⬅️后退</button>
            <button onClick={forward}>➡️前进</button>
        </div> 
    </div>
  )
}

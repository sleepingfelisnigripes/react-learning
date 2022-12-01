// 创建外壳组件APP(这块是用类式组件)
// 能在这块引用Component是因为在React里面用‘分别暴露export’暴露了Component，而不是解构赋值
import React, {Component} from 'react';

//创建并暴露App组件
export default class App extends Component{
  render(){
    return(
      //因为APP.js是外壳，所以不要在div里面直接写东西，而是在div里面引用其他组件的标签
      <div>
        <h2>App...</h2>
      </div>
    )
  }
}

// 暴露APP组件
//export default App;

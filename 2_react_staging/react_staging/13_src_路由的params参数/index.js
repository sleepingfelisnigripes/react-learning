// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// 引入APP组件
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
//ReactDOM.render(<App/>,document.getElementById('root'));
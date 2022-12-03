const express = require('express')
const app = express()

app.use((request,response,next)=>{
    console.log('有人请求了服务器2了');
    next()
})

app.get('/cars',(request,response)=>{
    const cars = [
        {id:'001',name:'penchi',price:118},
        {id:'002',name:'baoma',price:119},
        {id:'003',name:'jieda',price:120},
    ]
    response.send(cars)
})

app.listen(5002,(err)=>{
    if(!err) console.log('服务器2启动成功了,请求学生信息地址为: http://localhost:5002/cars');
})
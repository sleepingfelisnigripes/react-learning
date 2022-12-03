const express = require('express')
const app = express()

app.use((request,response,next)=>{
    console.log('有人请求了服务器了');
    console.log('请求来自于：',request.get('Host'));
    console.log("请求的地址",request.url);
    next()
})

app.get('/users',(request,response)=>{
    const users = [
        {login: "1",html_url:"https://github.com/1",avatar_url:"https://avatars.githubusercontent.com/u/1825798?v=4",id:1825798},
        {login: "Jinjiang",html_url:"https://github.com/Jinjiang",avatar_url:"https://avatars.githubusercontent.com/u/206848?v=4",id:206848},
        {login: "wupco",html_url:"https://github.com/wupco",avatar_url:"https://avatars.githubusercontent.com/u/21363179?v=4",id:21363179},
        {login: "SlexAxton",html_url:"https://github.com/SlexAxton",avatar_url:"https://avatars.githubusercontent.com/u/96554?v=4",id:96554},
        {login: "Simpsonpt",html_url:"https://github.com/Simpsonpt",avatar_url:"https://avatars.githubusercontent.com/u/209478?v=4",id:209478}
    ]
    response.send(users)
})

app.listen(5003,(err)=>{
    if(!err) console.log('服务器启动成功');
})
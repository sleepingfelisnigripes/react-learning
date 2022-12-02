/* const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api1':''}
        })
    )
}  */

const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware ('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5001', //请求转发给谁
            changeOrigin: true, //控制服务器收到的请求头中Host的值
            pathRewrite: {'^/api1': ''} //重写请求路径(地址去掉api1这几个字)
        }),
        createProxyMiddleware ('/api2', {
            target: 'http://localhost:5002',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}
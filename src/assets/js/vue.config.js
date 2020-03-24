module.exports = {
    devServer: {
        open: true, //浏览器自动打开页面
        host: "localhost", //本地服务器访问的路径
        port: 8080, //本地服务器访问的端口
        proxy: {
            '/motor': {
                //你要跨域的域名(包含host、端口号,切记：一定要带上http头);
                //同一个域名只能设置一次跨域，否则重复报错！
                target: 'https://m.dcdapp.com',
                changeOrigin: true, //是否跨域，设置为true;(必须)
            },
            "/home":{
                target: 'http://www.yidianzixun.com/',
                changeOrigin: true, //是否跨域，设置为true;(必须)
                onProxyReq(proxyReq, req, res) {
                    // add custom header to request
                    proxyReq.setHeader('Host', 'www.yidianzixun.com');
                    proxyReq.setHeader('Referer', 'http://www.yidianzixun.com/');
                    proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1');
                    // or log the req
                  }
            },
            "/api":{
                // https://api.hqtime.huanqiu.com/api/news/category 
                target: 'https://api.hqtime.huanqiu.com',
                changeOrigin: true, //是否跨域，设置为true;(必须)
                onProxyReq(proxyReq, req, res) {
                    // add custom header to request
                    proxyReq.setHeader('user-agent', '(Linux; Android 4.4.2;  Build/OPPO OPPOR11) huanqiuTIME/8.7.1');
                    proxyReq.setHeader('accept', 'application/vnd.hq_time.v2+json');
                    proxyReq.setHeader('clientversion', 'Android/v8.7.1');
                    // or log the req
                  }
            }

        }
    },

    publicPath: './'
}

/* getCarts(){
    //vue.config.js proxy代理做个配置会自动把懂车帝 https://m.dcdapp.com/motor
    // 转发为 localhost:8080 进行访问
    axios.get("/motor/brand/m/v1/brand/?device_id=0")
    .then(xhr=>{
        console.log("车信息",xhr)
    })
    .catch(err=>{
        console.log("失败了");
    })
}, */
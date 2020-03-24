module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    proxy: {
        '/feiyan': {
            target: 'https://iflow-api.uc.cn',
            changeOrigin: true,
        },
        '/web':{
          target: 'https://m.9ji.com',
          changeOrigin: true,
        },      
        '/recommend':{
          target: 'https://api.hongbeibang.com',
          changeOrigin: true, 
        }
        
    }

  },
  publicPath: './'
}

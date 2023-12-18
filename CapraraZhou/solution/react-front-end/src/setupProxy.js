const {createProxyMiddleware} = require ('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/sql',
        createProxyMiddleware({
            target: 'http://localhost:8081', //Springboot Local Server
            changeOrigin: true,
            pathRewrite: {
                '^/sql' : '/'
            }
        })
    );

    app.use(
        '/mongo',
        createProxyMiddleware({
            target: 'http://localhost:8082', // Mongodb Local Server
            changeOrigin: true,
            pathRewrite: {
                '^/mongo' : '/'
            }
        })
    );
};
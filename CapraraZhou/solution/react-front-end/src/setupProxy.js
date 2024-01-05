const {createProxyMiddleware} = require ('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/sql',
        createProxyMiddleware({
            target: 'http://localhost:8080', //Springboot Local Server
            changeOrigin: true
        })
    );

    app.use(
        '/mongo',
        createProxyMiddleware({
            target: 'http://localhost:8080', // Mongodb Local Server
            changeOrigin: true
        })
    );
};
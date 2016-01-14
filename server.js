var path = require('path');
var port = process.env.PORT || 3000;
var app = require('./app');
var webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
  var child_process = require('child_process');
  child_process.exec("webpack -p --config webpack.prod.config.js", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
} else {
  var webpackDevServer = require('webpack-dev-server');
  var webpackConfig = require('./webpack.config.js');
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer();

  var compiler = webpack(webpackConfig);
  var bundler = new webpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  // Start webpack-dev-server
  bundler.listen(8080, 'localhost', function () {
    console.log('Bundling project...');
  });

  // Proxy requests to localhost:3000/build to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    });

    proxy.on('error', function(e) {
      console.log('Error: Could not connect to proxy.');
    });
  });

}



app.listen(port, function () {
  console.log('Server running on port ' + port);
});
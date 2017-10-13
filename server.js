  const app = require('./app'); // this is your express app
  const http = require('http'); // 3. HTTP server

  /**
   * Get port from environment and store in Express.
   */

// var port = process.env.port || 3000;

// app.listen(port);


  let port = process.env.PORT || 80;// 2. Using process.env.PORT
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
import * as http from 'http';

// Create an HTTP server
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Start sending a response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Attempting to send data...');

  // Immediately destroy the socket
  req.socket.destroy();
});

// Listen on port 3500
server.listen(3500, () => {
  console.log('Server running on http://localhost:3500');
  console.log('Server attempts to send a response then immediately causes a socket hang up error on connections.');
});

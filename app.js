const http = require('http');

http.createServer((req, res) => {
  res.end("CI/CD Deployment Working 🚀");
}).listen(3000);

console.log("Server running on port 3000");

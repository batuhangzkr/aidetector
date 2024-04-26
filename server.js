const http = require('http');
const fs = require('fs');
const { StringDecoder } = require('string_decoder');

const hostname = process.env.PORT;
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile('./index.html', (err, html) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Sunucu hatası');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      }
    });
  } else if (req.method === 'POST' && req.url === '/kodGonder') {
    const decoder = new StringDecoder('utf-8');
    let data = '';

    req.on('data', (chunk) => {
      data += decoder.write(chunk);
    });

    req.on('end', () => {
      data += decoder.end();
      const parsedData = new URLSearchParams(data);
      const kod = parsedData.get('kod');
      const karakterlerDizisi = [...kod];

      // ... Burada karakterlerDizisi ile ilgili işlemlerinizi yapın ...

      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Kod alındı ve işlendi');
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Sayfa bulunamadı');
  }
});
require('./App');
server.listen(port, hostname, () => {
  console.log(`Sunucu http://${hostname}:${port}/ adresinde çalışıyor.`);
});

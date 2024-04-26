const http = require('http');
const { StringDecoder } = require('string_decoder');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000; // Heroku'dan gelen port veya varsayılan olarak 5000

const server = http.createServer((req, res) => {
    // Statik index.html dosyasını sun
    if (req.method === 'GET' && req.url === '/') {
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    else if (req.method === 'POST' && req.url === '/kodGonder') {
        const decoder = new StringDecoder('utf-8');
        let data = '';
        req.on('data', chunk => {
            data += decoder.write(chunk);
        });
        req.on('end', () => {
            data += decoder.end();
            if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                const parsedData = new URLSearchParams(data);
                const kod = parsedData.get('kod'); // "kod" isimli form alanından veriyi al
                const karakterlerDizisi = [...kod]; // Kodu karakterlerine ayır

                // Karakterler üzerinde işlem yap
               var xindex=0;
                var index=0;

    for(var i=0;i<karakterlerDizisi.length;i++)
    {
        if(karakterlerDizisi[i]=='i' && karakterlerDizisi[i+1]=='f' && karakterlerDizisi[i+2]==' ' && karakterlerDizisi[i+3]=='(')
        {
            xindex++;
        }
        else if(karakterlerDizisi[i]=='i' && karakterlerDizisi[i+1]=='f' && karakterlerDizisi[i+2]=='('){
            index++;
        }
         if(karakterlerDizisi[i]==')' && karakterlerDizisi[i+1]==' ' && karakterlerDizisi[i+2]=='{')
        {
            xindex++;
        }
        else if(karakterlerDizisi[i]==')' && karakterlerDizisi[i+1]=='{'){
            index++;
        }
        if(karakterlerDizisi[i]==',' && karakterlerDizisi[i+1]==' ' && karakterlerDizisi[i+2]!=' ')
        {
            xindex++;
        }
        else if(karakterlerDizisi[i]==',' && karakterlerDizisi[i+1]!=' '){
            index++;
        }
        if(karakterlerDizisi[i]=='f' && karakterlerDizisi[i+1]=='o' && karakterlerDizisi[i+2]=='r' && karakterlerDizisi[i+3]==' ' && karakterlerDizisi[i+4]=='(')
        {
            xindex++;
        }
        else if(karakterlerDizisi[i]=='f' && karakterlerDizisi[i+1]=='o' && karakterlerDizisi[i+2]=='r' && karakterlerDizisi[i+3]=='('){
            index++;
        }
        if(karakterlerDizisi[i]=='e' && karakterlerDizisi[i+1]=='l' && karakterlerDizisi[i + 2] == 's' && karakterlerDizisi[i + 3] == 'e' && karakterlerDizisi[i + 4] == ' ' && karakterlerDizisi[i + 5] == '{') {
            xindex++;
        } else if (karakterlerDizisi[i] == 'e' && karakterlerDizisi[i + 1] == 'l' && karakterlerDizisi[i + 2] == 's' && karakterlerDizisi[i + 3] == 'e' && karakterlerDizisi[i + 4] == '{') {
            index++;
        }
        if (karakterlerDizisi[i] == 'w' && karakterlerDizisi[i + 1] == 'h' && karakterlerDizisi[i + 2] == 'i' && karakterlerDizisi[i + 3] == 'l' && karakterlerDizisi[i + 4] == 'e' && karakterlerDizisi[i + 5] == ' ') {
            xindex++;
        } else if (karakterlerDizisi[i] == 'w' && karakterlerDizisi[i + 1] == 'h' && karakterlerDizisi[i + 2] == 'i' && karakterlerDizisi[i + 3] == 'l' && karakterlerDizisi[i + 4] == 'e' && karakterlerDizisi[i + 5] == '(') {
            index++;
        }
        if (karakterlerDizisi[i] == 'c' && karakterlerDizisi[i + 1] == 'o' && karakterlerDizisi[i + 2] == 'n' && karakterlerDizisi[i + 3] == 's' && karakterlerDizisi[i+4]=='t' && karakterlerDizisi[i+5]==' ' && karakterlerDizisi[i+6]=='{')
        {
            xindex++;
        }
        else if(karakterlerDizisi[i]=='c' && karakterlerDizisi[i+1]=='o' && karakterlerDizisi[i+2]=='n' && karakterlerDizisi[i+3]=='s' && karakterlerDizisi[i+4]=='t' && karakterlerDizisi[i+5]=='{'){
            index++;
        }

    }
    var finalresult=0;
        var resultx=xindex/(xindex+index);

        if(resultx>=0.90)
        {
            finalresult=1;
        }
        else if (resultx>=0.65)
        {
            finalresult=0.65;
        }
        else
        {
            finalresult=0;
        }
const responseHTML = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>GPT DETECTOR 2024 - Result</title>
            <style>
              @import url(https://fonts.googleapis.com/css?family=Bree+Serif);
        @import url(https://fonts.googleapis.com/css?family=Open+Sans);

        * {
            box-sizing: border-box;
        }

        body {
            background: url("17737075bdad5cfa9423bb2c3c2beee695c72bb8.jpg") no-repeat center center fixed;
            background-size: cover;
            color: #B1B1B1;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .header {
            background-color: #003366;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .result-box {
            width: 80%;
            max-width: 800px;
            margin: 0 auto;
            background: rgba(0, 0, 50, 0.8);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        .result-box h2 {
            font: 24px 'Bree Serif', serif;
            color: #fff;
            margin-bottom: 20px;
            text-align: center;
        }

        .result-box p {
            font: 16px 'Open Sans', sans-serif;
            color: #fff;
            background: #333;
            padding: 10px;
            border-radius: 5px;
            word-wrap: break-word;
        }

        .footer {
            background-color: #001a33;
            color: #ffffff;
            padding: 10px;
            text-align: center;
        }
            </style>
          </head>
          <body>
<div class="header">
  <h1>GPT DEDECTOR 2024 - Result</h1>
</div>
<section class="main-content">
  <div class="result-box">
    <h2>Analysis Result</h2>
    <div id="analysisResult"><!-- Sonuçlar burada gösterilecek --></div>
  </div>
</section>
<div class="footer">
  <p>© 2024 GPT Dedector. All rights reserved.</p>
</div>
<script>
  var x = ${finalresult};
  
  var resultText = '';
  if (x === 1) {
      resultText = '<strong>The code has been written by AI.</strong>';
  } else if (x === 0.65) {
      resultText = '<strong>This code may have been written by AI.</strong>';
  } else {
      resultText = '<strong>The code has not been written by AI.</strong>';
  }
  
  document.getElementById('analysisResult').innerHTML = resultText;
</script>
</body>
</html>
`;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(responseHTML);
            } else {
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.end('Incorrect content type');
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

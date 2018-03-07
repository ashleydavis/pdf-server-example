const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
app.use(express.static('public'));

//
// Getting a PDF file from the server via HTTP POST (streaming version).
//
app.post('/someroute', function(req, res, next) {

    console.log("Getting PDF file from the server! (streaming version)");

    const filePath = './example.pdf';
    const stream = fs.createReadStream(filePath);
    res.writeHead(200, {
        'Content-disposition': 'attachment; filename="' + encodeURIComponent(path.basename(filePath))  + '"',
        'Content-type': 'application/pdf',
    });
    stream.pipe(res);
});

//
// Getting a PDF file from the server via HTTP POST (non-streaming version).
//
app.post('/someroute-non-streaming-example', function(req, res, next) {

    console.log("Getting PDF file from the server! (non streaming version)");

    const filePath = './example.pdf';
    const stream = fs.createReadStream(filePath);
    res.writeHead(200, {
        'Content-disposition': 'attachment; filename="' + encodeURIComponent(path.basename(filePath))  + '"',
        'Content-type': 'application/pdf',
    });
    res.send(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
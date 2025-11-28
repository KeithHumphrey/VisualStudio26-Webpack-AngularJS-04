const https = require('https');
const fs = require('fs');
const path = require('path');

// SSL options
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

// Re‑use the same request handler
const handler = (req, res) => {
    let filePath = path.join(__dirname, 'clientapp/dist', req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
        } else {
            let ext = path.extname(filePath).toLowerCase();
            let type =
                ext === '.js' ? 'application/javascript' :
                    ext === '.css' ? 'text/css' :
                        ext === '.png' ? 'image/png' :
                            ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
                                ext === '.gif' ? 'image/gif' :
                                    'text/html';

            res.writeHead(200, { 'Content-Type': type });
            res.end(data);
        }
    });
};

// Start HTTPS server
https.createServer(options, handler).listen(3001, 'localhost', () => {
    console.log('HTTPS proxy running on https://localhost:3001');
    require('child_process').exec('start https://localhost:3001/');
});
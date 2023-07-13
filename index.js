/* api */
const express = require('express');
const app = express();
const port = 8081;

app.post('/api', (req, res, ) => {
    //read the request body
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    }
    );

    req.on('end', () => {
        console.log(body);
        res.end(JSON.stringify({
            status: 'ok',
            "message": body
        }));
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`server running at http//${hostname}:${port}/`)
);


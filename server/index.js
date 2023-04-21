const express = require('express');
const path = require('path');
const users = require('./controllers/users');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))

    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        next()
    })

 // Actions
 app
    .use('/api/v1/users', users)

// Catch All
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Error handling
app
    .use((err, req, res, next) => {
        console.log(err);
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })


app.listen(port, () => 
    console.log(`server running at http//${hostname}:${port}/`)
);


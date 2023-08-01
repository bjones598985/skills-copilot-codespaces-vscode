// create web server
//const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 5000));

// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
// app.use('/build', express.static(path.join(__dirname, 'build')));
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/public', express.static(path.join(__dirname, 'public')));
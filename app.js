// Copyright 2015-2016, Google, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// [START app]
'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello, world!');
});

app.get('/start', function (req, res) {
		fs.readFile('main.html', function(error, content) {
			if (error) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('main.html not found');
			}
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content, 'utf-8');
			}
		});
});

app.get('/createacct', function (req, res) {
		fs.readFile('createacct.html', function(error, content) {
			if (error) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('main.html not found');
			}
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content, 'utf-8');
			}
		});
});

app.get('/personal', function (req, res) {
		fs.readFile('personal.html', function(error, content) {
			if (error) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('main.html not found');
			}
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content, 'utf-8');
			}
		});
});
app.get('/schools', function (req, res) {
		fs.readFile('schools.html', function(error, content) {
			if (error) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('main.html not found');
			}
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content, 'utf-8');
			}
		});
});


app.get('/scores', function (req, res) {
		fs.readFile('scores.html', function(error, content) {
			if (error) {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end('main.html not found');
			}
			else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(content, 'utf-8');
			}
		});
});

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
// [END app]

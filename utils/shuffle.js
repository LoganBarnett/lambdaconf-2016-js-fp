#!/usr/bin/env node
const fs = require('fs');

let logs = JSON.parse(fs.readFileSync('logs.json', 'utf8' ).toString());

for(var i = 0; i < 50; ++i) {
  logs = logs.sort((a, b) => (Math.random() * logs.length) - logs.length / 2);
}

fs.writeFileSync('logs-random.json', JSON.stringify(logs));

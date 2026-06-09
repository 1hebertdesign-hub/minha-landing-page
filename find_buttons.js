const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<a[^>]*href="#checkout"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('--- BUTTON ---');
  console.log(match[0]);
}

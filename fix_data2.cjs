const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(/Winbox's/g, "Winbox\\'s");

fs.writeFileSync('src/data.ts', content);

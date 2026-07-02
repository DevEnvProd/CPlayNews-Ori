const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');

// The issue is Don't inside a single-quoted string.
// Let's just find and replace Don't with Don\'t inside the data.ts
content = content.replace(/Don't/g, "Don\\'t");

fs.writeFileSync('src/data.ts', content);

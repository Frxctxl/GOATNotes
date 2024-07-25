const fs = require('fs').promises;
async function getNotes() {
  const data = await fs.readFile('./db/db.json', 'utf8');
  return JSON.parse(data);
}

async function writeNotes(arr) {
  await fs.writeFile('./db/db.json', JSON.stringify(arr));
}

module.exports = {
  getNotes: getNotes,
  writeNotes: writeNotes
}

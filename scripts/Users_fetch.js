
import { readFileSync } from 'fs';
const fs = require('fs');

const filePath = 'c:/Users/KhalidTakala/Documents_Lcl/VBcode/Project_1/USERS.json';

try {
  const data = fs.readFileSync(filePath, 'utf8');
  const users = JSON.parse(data);

  const kNames = users
    .filter(user => user.UserName && user.UserName.trim().toLowerCase().startsWith('k'))
    .map(user => user.UserName);

  console.log(kNames);
} catch (err) {
  console.error('Error reading or parsing file:', err.message);
}

console.log("This is a placeholder for the Users_fetch.js file.");
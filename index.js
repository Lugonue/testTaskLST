import fs from 'fs';
import { deserialize, serialize } from './Serialize.js';


let i = 0;
let data = [];
while ( i < 50) {
  i++;
  const item = Math.floor(Math.random() * 4) + 1;
  data.push(item);
}

const res = serialize(data)
console.log(res)
console.log(deserialize(res))
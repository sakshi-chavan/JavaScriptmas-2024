import { codedMessage } from './codedMessage.js'

const decodedMessage = codedMessage.reduce((acc, code) => {
  let asciiValue = parseInt(code, 2) - 10;
  if (asciiValue < 32) {
    asciiValue += 96;
  }
  return acc + String.fromCharCode(asciiValue);
}, "");

console.log(decodedMessage);

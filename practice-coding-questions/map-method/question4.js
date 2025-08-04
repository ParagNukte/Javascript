// Convert array o strings to array of string lengths.",
const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
];

const stringLengths = words.map(word=> word.length);
console.log(stringLengths)
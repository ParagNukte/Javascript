//Capitalize the first letter of each word in an array of strings

const words = [
  "hello world",
  "javascript rocks",
  "python is fun",
  "data science",
  "functional programming",
  "map filter reduce",
  "clean code",
  "openai language model",
  "ai revolution",
  "react components",
  "typescript support",
];

const capitalizeWords = words.map((word) => {
    return word.split(" ").map(w=>w[0].toUpperCase() + w.slice(1)).join(" ")
});
console.log(capitalizeWords);

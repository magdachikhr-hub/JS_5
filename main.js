let text = "hello world i am a string";

console.log(text.length);
//tells us how long the given string is

console.log(text.toUpperCase());
console.log(text.toLowerCase());

let newText = "         bye-bye-bye               ";
console.log(newText.trim());

console.log(newText.includes("y"));

console.log(newText.indexOf("y"));
console.log(newText.charAt(10));
let charAt10 = newText.charAt(10);
console.log(charAt10);

let userName = `magda`;
let count = 3;

console.log(
  `Welcome to our page ${userName}, its nice to see you! its your ${count} visit`,
);

let you = "she is a student";

console.log(you.split(" "));

let about = "javascript is for programming";

console.log(about.slice(0, 10));

console.log(about.replace("programming", "speaking"));

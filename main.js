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

// 1.
// შექმენით ცვლადი და მიანიჭეთ შემდეგი სტრინგის მნიშვნელობა: 'welcome to our web-site natia'
let textTwo = "welcome to our web-site natia";
console.log(textTwo);
// გამოიყენეთ slice() მეთოდი 'natia 'სიტყვის ამოსაღებად, შედეგი შეინახეთ ცვლადში
console.log(textTwo.slice(24));

// გამოიტანეთ მიღებული ცვლადის მნიშვნელობა კონსოლში

// 2.
// შექმენით ცვლადი სახელად str და მიანიჭეთ შემდეგი მნიშვნელობა: "Mind, Power, Soul"

let str = "Mind, Power, Soul";

// გამოიყენეთ replace() მეთოდი და შეცვალეთ "Power" სიტყვა "Space"-ით და შედეგი შეინახეთ ცვლადში სახელად part

console.log(str.replace("Power", "Space"));

//გამოიტანეთ მიღებული ცვლადის მნიშვნელობა კონსოლში

// 3.
// შექმენით ცვლადი სახელად str და მიანიჭეთ შემდეგი მნიშვნელობა: "Mind, Power, Power, Soul"
let strtwo = "Mind, Power, Power, Soul";

// გამოიყენეთ replaceAll() მეთოდი და შეცვალეთ ყველა "Power" სიტყვა "Space"-ით და შედეგი შეინახეთ ცვლადში სახელად part

// console.log(strtwo.replaceAll("Power", "Space"));
let part = strtwo.replaceAll("Power", "Space");
console.log(part);

// გამოიტანეთ მიღებული ცვლადის მნიშვნელობა კონსოლში

// 4.
// შექმენით ცვლადი სახელად newText და მიანიჭეთ შემდეგი სტრინგის მნიშვნელობა: 'HELLO WORLD'
let newTextt = "HELLO WORLD";

// შექმენით კიდევ ერთი ცვლადი სახელად newText2 და მიანიჭეთ 'this letters must be uppercase' მნიშვნელობა
let newText2 = "this letters must be uppercase";
// გამოიყენეთ toLowerCase() მეთოდი newText ცვლადზე და შედეგი გამოიტანეთ კონსოლში

console.log(newTextt.toLowerCase());

// გამოიყენეთ toUpperCase() მეთოდი newText2 ცვლადზე და შედეგი გამოიტანეთ კონსოლში
console.log(newText2.toUpperCase());

// 5.
// შექმენით ცვლადი სახელად withSpaces  და მიანიჭეთ მნიშვნელობა   "  გამარჯობა, მე ვარ სტუდენტი   "
let withSpaces = "  გამარჯობა, მე ვარ სტუდენტი   ";

// გამოიყენეთ trim() მეთოდი withSpaces ცვლადზე სფეისების თავსა და ბოლოში მოსაშორებლად, შედეგი გამოიტანეთ კონსოლში

console.log(withSpaces.trim(" "));

// 6.
//  შექმენით ცვლადი paragraph და მიანიჭეთ მნიშნელობა 'მე ვარ პროგრამისტი'
let paragraph = "მე ვარ პროგრამისტი";

// გვაინტერესბს რომელი ჩარაქტერია მე-7 ინდექსზე, გამოიყენეთ charAt() მეთოდი და გამოიტანეთ შედეგი კონსოლში

console.log(paragraph.charAt(7));

// 7.

//  შექმენით ცვლადი სახელად myText და მიანიჭეთ მნიშვნელობა  "JavaScript is awesome"

let myText = "JavaScript is awesome";
// შეამოწმეთ მოცემული სტრინგი თუ შეიცავს სიტყვა  "awesome" - ს , ამისთვის გამოიყენეთ includes() მეთოდი და შედეგი მიანიჭეთ ცვლადს სახელად includesAwsome
// console.log(myText.includes("awesome"));
let includesAwsome = myText.includes("awesome");
console.log(includesAwsome);
//დალოგეთ ახალშექმნილი ცვლადი

let country = "Georgia";
console.log(`hi i am from ${country}, my country is very beautiful`);

let user = `magda`;
let age = 20;

console.log(`hi ${user}, you are ${20} years old`);

//split method

let someText = `my name is magda`;
console.log(someText.split(` `));

let array = someText.split(` `);
console.log(array);

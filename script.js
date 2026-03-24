//JS_6
// = - მინიჭების ოპერატორი (ერთმაგი ტოლობა)
let number = 20;

// == - მნიშვნელობების შედარება (ორმაგი ტოლობა)
let age = 23;
let yourAge = 30;
let world = "23";
console.log(age == yourAge);
console.log(age == world);

// === - მნიშვნელობებს და ტიპებს ადარებს (სამაგი ტოლობა) (ტიპი არის განსხვავებული - აბრუნებს უარყოფითს)

let chosenAge = "40";

console.log(age === chosenAge);

// practice

let text1 = "this is some text";
let text2 = "this is some text";

console.log(text1 == text2);
console.log(text1 === text2);

// მეტობა ნაკლებობა და ტოლობა

console.log(10 > 20);
console.log(20 >= 10);

//ნაშთი
console.log(20 % 8);

console.log(20 % 8 === 0);

console.log(30 % 11);

//
let compare = 30 === 20;
console.log(compare);

// + - string
// - / * - number

let example = 20 + "2";
let exampleTwo = 20 - "2";
console.log(example);
console.log(exampleTwo);

console.log(typeof (200 / "2"));
console.log("200" - "2");

//ifs

if (10 > 20) {
  console.log("true");
}

if (20 > 10) {
  console.log("this condition is true");
}

let myAge = 20;
if (myAge >= 18) {
  console.log("customer is of legal age");
}

let myAge2 = 17;
if (myAge2 >= 18) {
  console.log("customer is of legal age");
} else {
  console.log("customer is not of legal age");
}

console.log("continue");

//
let myAge3 = -3;

if (myAge3 >= 18 && myAge3 < 120) {
  console.log("customer is of legal age");
} else if (myAge3 > 0 && myAge3 < 18) {
  console.log("customer is not of legal age");
} else {
  console.log("the given age is incorrect");
}

//&& - მის გვერდებზე მდგომი ორივე პირობა უნდა შესრულდეს რომ ჭეშმარიტი გამოვიდეს (ლოგიკური და)
console.log(2 === 2 && 3 > 0);

//mine

// if (score > 90 && score <= 100) {
//   console.log("A");
// } else if (score > 100) {
//   console.log("INCORRECT NUMBER");
// } else if (score < 0) {
//   console.log("INCORRECT NUMBER");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score > 70) {
//   console.log("C");
// } else if (score > 60) {
//   console.log("D");
// } else if (score > 50) {
//   console.log("F");
// } else {
//   console.log("FX");
// }

//third option

// if (score <= 100 && score >= 90) {
//   console.log("A");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else if (score >= 70 && score < 80) {
//   console.log("C");
// } else if (score >= 60 && score < 70) {
//   console.log("D");
// } else if (score >= 50 && score < 60) {
//   console.log("F");
// } else if (score >= 0 && score < 40) {
//   console.log("FX");
// } else {
//   console.log("INCORRECT NUMBER");
// }

let score = 102;

if (score > 100) {
  console.log("INCORRECT NUMBER");
} else if (score < 0) {
  console.log("INCORRECT NUMBER");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 50) {
  console.log("F");
} else {
  console.log("FX");
}

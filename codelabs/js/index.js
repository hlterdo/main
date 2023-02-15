let name = "halit";
let age = "30";
let isApproved = true;
let xx;
let yy = null;

let person = {
  name: "halit",
  age: 30,
};

let x = person;

x.name = "xxx";

console.log(typeof x);
console.log(x);

function f(p, a) {
  p.name = "oooooo";
  a = 20;

  return 20, 21;
}

let a = 15;

const message = "hi-pri";
const another = new String("hi-obj");

function f1(s) {
  s[1] = "a";
}

f1(message);
f1(another);

console.log(message);
console.log(another);

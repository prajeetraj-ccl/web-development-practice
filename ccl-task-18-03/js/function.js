1. //Function Declaration
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Raj"));

//Function Expression
const greet = function(name) {
  return "Hello " + name;
};

console.log(greet("Sam"));

//Arrow Function
const greet = (name) => "Hello " + name;

console.log(greet("John"));
//Anonymous Function
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
// Callback Function
function processUser(name, callback) {
  console.log("Processing " + name);
  callback();
}

processUser("Raj", function() {
  console.log("Done!");
});
//Higher-Order Function
function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(5, 3, (x, y) => x * y);
console.log(result);
//Generator Function
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();

console.log(gen.next().value);
console.log(gen.next().value);

//Async Function
async function getData() {
  return "Data received";
}

getData().then((res) => console.log(res));
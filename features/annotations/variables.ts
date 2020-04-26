let apples: number = 5;
let nothing: null = null;
let now: Date = new Date();
let test: undefined = undefined;

let colors: string[] = ["red", "blue"];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const log: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) func that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) when we dewclare a variable on one line and initalizate later
let words = ["blue", "red", "yellow"];
let foundWord: boolean;

for (const word of words) {
  if (word === "red") {
    foundWord = true;
  }
}

//3)variable whose type cannot be inferred correctly
let numbers = [-10,-1,12]
let numberAboveZero: boolean | number = false

for(const num of numbers){
  if(num >     0){
    numberAboveZero = num
  }
}
class ArraOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}
class ArraOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}
//GENERICS
class ArraOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}
new ArraOfAnything<string>(["a", "b"]);
new ArraOfAnything([1, 2, 3]);

function printAnyThing<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnyThing<string>(["a", "b", "c"]);

//GENERICS CONSTRAINS
class Car {
  print(): void {
    console.log("I ma a car");
  }
}
class House {
  print(): void {
    console.log("I ma a house");
  }
}

interface Printable {
  print(): void;
}
function printCarsOrHouse<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printCarsOrHouse<House | Car>([new House(), new Car()]);

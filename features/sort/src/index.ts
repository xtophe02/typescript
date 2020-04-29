import { NumbersCollection } from "./NumberCollecion";
import { CharactersCollection } from "./CharactersCollection";

const numbers = new NumbersCollection([10, 3, -5, 0, 9, -56, 5, 5]);
const letters = new CharactersCollection("Christophe_Moreira");

numbers.sort();
letters.sort();
console.log(numbers.data);
console.log(letters.data);

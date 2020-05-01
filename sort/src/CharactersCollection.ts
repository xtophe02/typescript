import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const splitStr = this.data.split("");
    const temp = splitStr[leftIndex];
    splitStr[leftIndex] = splitStr[rightIndex];
    splitStr[rightIndex] = temp;
    this.data = splitStr.join("");
  }
  get length(): number {
    return this.data.length;
  }
}

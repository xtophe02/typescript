interface Report {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}

const yaris = {
  name: "toyota",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const newDring = {
  nao: "interessa",
  summary(): string {
    return `nao ${this.nao}`;
  },
};

const printR = (item: Report): string => item.summary();

printR(yaris);
printR(newDring);

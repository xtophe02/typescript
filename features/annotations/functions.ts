const add = (a: number, b: number): number => {
  return a + b;
};

function logger(a: number, b: number): number {
  return a * b;
}

const divide = (message: string): never => {
  throw new Error(message);
};

const divide2 = (message: string): void => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const testFore = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {};

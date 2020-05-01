const carMakers = ["ford", "toyota"];

const carsByMake: string[][] = [];

const myCar = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates = [new Date(), "10-10-2019"];

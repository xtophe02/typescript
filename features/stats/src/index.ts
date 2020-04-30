import { CSVFileReader } from "./CSVFileReader";

const matchs = new CSVFileReader("football.csv");
matchs.read();
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUtdWin = 0;

for (let match of matchs.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWin++;
  }
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWin++;
  }
}

console.log(manUtdWin);

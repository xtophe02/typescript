import fs from "fs";

const matchs = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => row.split(","));

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUtdWin = 0;

for (let match of matchs) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWin++;
  }
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWin++;
  }
}

console.log(manUtdWin);

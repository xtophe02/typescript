import fs from "fs";

export class CSVFileReader {
  data: string[][] = [];
  constructor(public file: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.file, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}

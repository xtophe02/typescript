import fs from "fs";

export abstract class CSVFileReader<T> {
  abstract mapRow(row: string[]): T;

  data: T[] = [];
  constructor(public file: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.file, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}

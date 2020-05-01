import { stringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { CSVFileReader } from "./CSVFileReader";
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(file: string): MatchReader {
    return new MatchReader(new CSVFileReader(file));
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}

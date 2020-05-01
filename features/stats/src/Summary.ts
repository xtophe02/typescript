import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, file: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(file));
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const p = this.analyzer.run(matches);
    this.outputTarget.print(p);
  }
}

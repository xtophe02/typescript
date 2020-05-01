import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const match = MatchReader.fromCsv("football.csv");
const manUtd = Summary.winsAnalysisWithHtmlReport("Man City", "report");
match.load();
manUtd.buildAndPrintReport(match.matches);

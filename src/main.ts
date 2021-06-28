import { CharStreams, CommonTokenStream } from "antlr4ts";
import EvalVititor from "./EvalVititor";
import { MyGrammarLexer } from "./gen/MyGrammarLexer";
import { MyGrammarParser } from "./gen/MyGrammarParser";


var input = `4+3+2-1*4/4`;
console.log(input);
let inputStream = CharStreams.fromString(input);
let lexer = new MyGrammarLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new MyGrammarParser(tokenStream);
parser.buildParseTree = true;
let tree = parser.input();

let evalVititor = new EvalVititor();
let ret = evalVititor.visit(tree);
console.log("结果");
console.log(ret);

// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MyGrammarLexer extends Lexer {
	public static readonly INT = 1;
	public static readonly DOUBLE = 2;
	public static readonly PI = 3;
	public static readonly E = 4;
	public static readonly POW = 5;
	public static readonly NL = 6;
	public static readonly WS = 7;
	public static readonly ID = 8;
	public static readonly PLUS = 9;
	public static readonly EQUAL = 10;
	public static readonly MINUS = 11;
	public static readonly MULT = 12;
	public static readonly DIV = 13;
	public static readonly LPAR = 14;
	public static readonly RPAR = 15;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"INT", "DOUBLE", "PI", "E", "POW", "NL", "WS", "ID", "PLUS", "EQUAL", 
		"MINUS", "MULT", "DIV", "LPAR", "RPAR",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'pi'", "'e'", "'^'", "'\n'", undefined, 
		undefined, "'+'", "'='", "'-'", "'*'", "'/'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "DOUBLE", "PI", "E", "POW", "NL", "WS", "ID", "PLUS", 
		"EQUAL", "MINUS", "MULT", "DIV", "LPAR", "RPAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x11V\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02#\n\x02\r\x02" +
		"\x0E\x02$\x03\x03\x06\x03(\n\x03\r\x03\x0E\x03)\x03\x03\x03\x03\x06\x03" +
		".\n\x03\r\x03\x0E\x03/\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\b\x06\b<\n\b\r\b\x0E\b=\x03\b\x03\b\x03\t" +
		"\x03\t\x07\tD\n\t\f\t\x0E\tG\v\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x02\x02\x02\x11" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11\x03\x02\x06\x03\x022;\x05\x02\v\v\x0F\x0F\"\"\x05" +
		"\x02C\\aac|\x06\x022;C\\aac|\x02Z\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x03\"\x03\x02\x02\x02\x05\'\x03\x02\x02" +
		"\x02\x071\x03\x02\x02\x02\t4\x03\x02\x02\x02\v6\x03\x02\x02\x02\r8\x03" +
		"\x02\x02\x02\x0F;\x03\x02\x02\x02\x11A\x03\x02\x02\x02\x13H\x03\x02\x02" +
		"\x02\x15J\x03\x02\x02\x02\x17L\x03\x02\x02\x02\x19N\x03\x02\x02\x02\x1B" +
		"P\x03\x02\x02\x02\x1DR\x03\x02\x02\x02\x1FT\x03\x02\x02\x02!#\t\x02\x02" +
		"\x02\"!\x03\x02\x02\x02#$\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02" +
		"\x02\x02%\x04\x03\x02\x02\x02&(\t\x02\x02\x02\'&\x03\x02\x02\x02()\x03" +
		"\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*+\x03\x02\x02\x02+-" +
		"\x070\x02\x02,.\t\x02\x02\x02-,\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03" +
		"\x02\x02\x02/0\x03\x02\x02\x020\x06\x03\x02\x02\x0212\x07r\x02\x0223\x07" +
		"k\x02\x023\b\x03\x02\x02\x0245\x07g\x02\x025\n\x03\x02\x02\x0267\x07`" +
		"\x02\x027\f\x03\x02\x02\x0289\x07\f\x02\x029\x0E\x03\x02\x02\x02:<\t\x03" +
		"\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02" +
		"\x02\x02>?\x03\x02\x02\x02?@\b\b\x02\x02@\x10\x03\x02\x02\x02AE\t\x04" +
		"\x02\x02BD\t\x05\x02\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02" +
		"\x02\x02EF\x03\x02\x02\x02F\x12\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07" +
		"-\x02\x02I\x14\x03\x02\x02\x02JK\x07?\x02\x02K\x16\x03\x02\x02\x02LM\x07" +
		"/\x02\x02M\x18\x03\x02\x02\x02NO\x07,\x02\x02O\x1A\x03\x02\x02\x02PQ\x07" +
		"1\x02\x02Q\x1C\x03\x02\x02\x02RS\x07*\x02\x02S\x1E\x03\x02\x02\x02TU\x07" +
		"+\x02\x02U \x03\x02\x02\x02\b\x02$)/=E\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
		}

		return MyGrammarLexer.__ATN;
	}

}


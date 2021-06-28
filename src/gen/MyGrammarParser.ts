// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";
import { MyGrammarVisitor } from "./MyGrammarVisitor";


export class MyGrammarParser extends Parser {
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
	public static readonly RULE_input = 0;
	public static readonly RULE_setVar = 1;
	public static readonly RULE_plusOrMinus = 2;
	public static readonly RULE_multOrDiv = 3;
	public static readonly RULE_pow = 4;
	public static readonly RULE_unaryMinus = 5;
	public static readonly RULE_atom = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"input", "setVar", "plusOrMinus", "multOrDiv", "pow", "unaryMinus", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'pi'", "'e'", "'^'", "'\n'", undefined, 
		undefined, "'+'", "'='", "'-'", "'*'", "'/'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INT", "DOUBLE", "PI", "E", "POW", "NL", "WS", "ID", "PLUS", 
		"EQUAL", "MINUS", "MULT", "DIV", "LPAR", "RPAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_input);
		let _la: number;
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new ToSetVarContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.setVar();
				this.state = 15;
				this.match(MyGrammarParser.NL);
				this.state = 16;
				this.input();
				}
				break;

			case 2:
				_localctx = new CalculateContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 18;
				this.plusOrMinus(0);
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MyGrammarParser.NL) {
					{
					this.state = 19;
					this.match(MyGrammarParser.NL);
					}
				}

				this.state = 22;
				this.match(MyGrammarParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setVar(): SetVarContext {
		let _localctx: SetVarContext = new SetVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MyGrammarParser.RULE_setVar);
		try {
			_localctx = new SetVariableContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(MyGrammarParser.ID);
			this.state = 27;
			this.match(MyGrammarParser.EQUAL);
			this.state = 28;
			this.plusOrMinus(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public plusOrMinus(): PlusOrMinusContext;
	public plusOrMinus(_p: number): PlusOrMinusContext;
	// @RuleVersion(0)
	public plusOrMinus(_p?: number): PlusOrMinusContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PlusOrMinusContext = new PlusOrMinusContext(this._ctx, _parentState);
		let _prevctx: PlusOrMinusContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, MyGrammarParser.RULE_plusOrMinus, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ToMultOrDivContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 31;
			this.multOrDiv(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 41;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 39;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new PlusContext(new PlusOrMinusContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_plusOrMinus);
						this.state = 33;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 34;
						this.match(MyGrammarParser.PLUS);
						this.state = 35;
						this.multOrDiv(0);
						}
						break;

					case 2:
						{
						_localctx = new MinusContext(new PlusOrMinusContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_plusOrMinus);
						this.state = 36;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 37;
						this.match(MyGrammarParser.MINUS);
						this.state = 38;
						this.multOrDiv(0);
						}
						break;
					}
					}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multOrDiv(): MultOrDivContext;
	public multOrDiv(_p: number): MultOrDivContext;
	// @RuleVersion(0)
	public multOrDiv(_p?: number): MultOrDivContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultOrDivContext = new MultOrDivContext(this._ctx, _parentState);
		let _prevctx: MultOrDivContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, MyGrammarParser.RULE_multOrDiv, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ToPowContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 45;
			this.pow();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 53;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new MultOrDivContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_multOrDiv);
						this.state = 47;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 48;
						this.match(MyGrammarParser.MULT);
						this.state = 49;
						this.pow();
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new MultOrDivContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MyGrammarParser.RULE_multOrDiv);
						this.state = 50;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 51;
						this.match(MyGrammarParser.DIV);
						this.state = 52;
						this.pow();
						}
						break;
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pow(): PowContext {
		let _localctx: PowContext = new PowContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MyGrammarParser.RULE_pow);
		try {
			_localctx = new PowerContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.unaryMinus();
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 59;
				this.match(MyGrammarParser.POW);
				this.state = 60;
				this.pow();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryMinus(): UnaryMinusContext {
		let _localctx: UnaryMinusContext = new UnaryMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MyGrammarParser.RULE_unaryMinus);
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.MINUS:
				_localctx = new ChangeSignContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.match(MyGrammarParser.MINUS);
				this.state = 64;
				this.unaryMinus();
				}
				break;
			case MyGrammarParser.INT:
			case MyGrammarParser.DOUBLE:
			case MyGrammarParser.PI:
			case MyGrammarParser.E:
			case MyGrammarParser.ID:
			case MyGrammarParser.LPAR:
				_localctx = new ToAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MyGrammarParser.RULE_atom);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MyGrammarParser.PI:
				_localctx = new ConstantPIContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(MyGrammarParser.PI);
				}
				break;
			case MyGrammarParser.E:
				_localctx = new ConstantEContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.match(MyGrammarParser.E);
				}
				break;
			case MyGrammarParser.DOUBLE:
				_localctx = new DoubleContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.match(MyGrammarParser.DOUBLE);
				}
				break;
			case MyGrammarParser.INT:
				_localctx = new IntContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.match(MyGrammarParser.INT);
				}
				break;
			case MyGrammarParser.ID:
				_localctx = new VariableContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.match(MyGrammarParser.ID);
				}
				break;
			case MyGrammarParser.LPAR:
				_localctx = new BracesContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 73;
				this.match(MyGrammarParser.LPAR);
				this.state = 74;
				this.plusOrMinus(0);
				this.state = 75;
				this.match(MyGrammarParser.RPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.plusOrMinus_sempred(_localctx as PlusOrMinusContext, predIndex);

		case 3:
			return this.multOrDiv_sempred(_localctx as MultOrDivContext, predIndex);
		}
		return true;
	}
	private plusOrMinus_sempred(_localctx: PlusOrMinusContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private multOrDiv_sempred(_localctx: MultOrDivContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11R\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02" +
		"\x17\n\x02\x03\x02\x03\x02\x05\x02\x1B\n\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04*\n\x04\f\x04\x0E\x04-\v\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x058\n\x05\f\x05\x0E\x05" +
		";\v\x05\x03\x06\x03\x06\x03\x06\x05\x06@\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x05\x07E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\bP\n\b\x03\b\x02\x02\x04\x06\b\t\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x02\x02\x02W\x02\x1A\x03\x02\x02\x02\x04\x1C\x03\x02" +
		"\x02\x02\x06 \x03\x02\x02\x02\b.\x03\x02\x02\x02\n<\x03\x02\x02\x02\f" +
		"D\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10\x11\x05\x04\x03\x02\x11\x12" +
		"\x07\b\x02\x02\x12\x13\x05\x02\x02\x02\x13\x1B\x03\x02\x02\x02\x14\x16" +
		"\x05\x06\x04\x02\x15\x17\x07\b\x02\x02\x16\x15\x03\x02\x02\x02\x16\x17" +
		"\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x07\x02\x02\x03\x19\x1B" +
		"\x03\x02\x02\x02\x1A\x10\x03\x02\x02\x02\x1A\x14\x03\x02\x02\x02\x1B\x03" +
		"\x03\x02\x02\x02\x1C\x1D\x07\n\x02\x02\x1D\x1E\x07\f\x02\x02\x1E\x1F\x05" +
		"\x06\x04\x02\x1F\x05\x03\x02\x02\x02 !\b\x04\x01\x02!\"\x05\b\x05\x02" +
		"\"+\x03\x02\x02\x02#$\f\x05\x02\x02$%\x07\v\x02\x02%*\x05\b\x05\x02&\'" +
		"\f\x04\x02\x02\'(\x07\r\x02\x02(*\x05\b\x05\x02)#\x03\x02\x02\x02)&\x03" +
		"\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x07" +
		"\x03\x02\x02\x02-+\x03\x02\x02\x02./\b\x05\x01\x02/0\x05\n\x06\x0209\x03" +
		"\x02\x02\x0212\f\x05\x02\x0223\x07\x0E\x02\x0238\x05\n\x06\x0245\f\x04" +
		"\x02\x0256\x07\x0F\x02\x0268\x05\n\x06\x0271\x03\x02\x02\x0274\x03\x02" +
		"\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:\t\x03" +
		"\x02\x02\x02;9\x03\x02\x02\x02<?\x05\f\x07\x02=>\x07\x07\x02\x02>@\x05" +
		"\n\x06\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\v\x03\x02\x02\x02AB\x07" +
		"\r\x02\x02BE\x05\f\x07\x02CE\x05\x0E\b\x02DA\x03\x02\x02\x02DC\x03\x02" +
		"\x02\x02E\r\x03\x02\x02\x02FP\x07\x05\x02\x02GP\x07\x06\x02\x02HP\x07" +
		"\x04\x02\x02IP\x07\x03\x02\x02JP\x07\n\x02\x02KL\x07\x10\x02\x02LM\x05" +
		"\x06\x04\x02MN\x07\x11\x02\x02NP\x03\x02\x02\x02OF\x03\x02\x02\x02OG\x03" +
		"\x02\x02\x02OH\x03\x02\x02\x02OI\x03\x02\x02\x02OJ\x03\x02\x02\x02OK\x03" +
		"\x02\x02\x02P\x0F\x03\x02\x02\x02\v\x16\x1A)+79?DO";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class InputContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_input; }
	public copyFrom(ctx: InputContext): void {
		super.copyFrom(ctx);
	}
}
export class ToSetVarContext extends InputContext {
	public setVar(): SetVarContext {
		return this.getRuleContext(0, SetVarContext);
	}
	public NL(): TerminalNode { return this.getToken(MyGrammarParser.NL, 0); }
	public input(): InputContext {
		return this.getRuleContext(0, InputContext);
	}
	constructor(ctx: InputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterToSetVar) {
			listener.enterToSetVar(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitToSetVar) {
			listener.exitToSetVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitToSetVar) {
			return visitor.visitToSetVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CalculateContext extends InputContext {
	public plusOrMinus(): PlusOrMinusContext {
		return this.getRuleContext(0, PlusOrMinusContext);
	}
	public EOF(): TerminalNode { return this.getToken(MyGrammarParser.EOF, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.NL, 0); }
	constructor(ctx: InputContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterCalculate) {
			listener.enterCalculate(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitCalculate) {
			listener.exitCalculate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitCalculate) {
			return visitor.visitCalculate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetVarContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_setVar; }
	public copyFrom(ctx: SetVarContext): void {
		super.copyFrom(ctx);
	}
}
export class SetVariableContext extends SetVarContext {
	public ID(): TerminalNode { return this.getToken(MyGrammarParser.ID, 0); }
	public EQUAL(): TerminalNode { return this.getToken(MyGrammarParser.EQUAL, 0); }
	public plusOrMinus(): PlusOrMinusContext {
		return this.getRuleContext(0, PlusOrMinusContext);
	}
	constructor(ctx: SetVarContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterSetVariable) {
			listener.enterSetVariable(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitSetVariable) {
			listener.exitSetVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitSetVariable) {
			return visitor.visitSetVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusOrMinusContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_plusOrMinus; }
	public copyFrom(ctx: PlusOrMinusContext): void {
		super.copyFrom(ctx);
	}
}
export class PlusContext extends PlusOrMinusContext {
	public plusOrMinus(): PlusOrMinusContext {
		return this.getRuleContext(0, PlusOrMinusContext);
	}
	public PLUS(): TerminalNode { return this.getToken(MyGrammarParser.PLUS, 0); }
	public multOrDiv(): MultOrDivContext {
		return this.getRuleContext(0, MultOrDivContext);
	}
	constructor(ctx: PlusOrMinusContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterPlus) {
			listener.enterPlus(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitPlus) {
			listener.exitPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPlus) {
			return visitor.visitPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinusContext extends PlusOrMinusContext {
	public plusOrMinus(): PlusOrMinusContext {
		return this.getRuleContext(0, PlusOrMinusContext);
	}
	public MINUS(): TerminalNode { return this.getToken(MyGrammarParser.MINUS, 0); }
	public multOrDiv(): MultOrDivContext {
		return this.getRuleContext(0, MultOrDivContext);
	}
	constructor(ctx: PlusOrMinusContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterMinus) {
			listener.enterMinus(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitMinus) {
			listener.exitMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitMinus) {
			return visitor.visitMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToMultOrDivContext extends PlusOrMinusContext {
	public multOrDiv(): MultOrDivContext {
		return this.getRuleContext(0, MultOrDivContext);
	}
	constructor(ctx: PlusOrMinusContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterToMultOrDiv) {
			listener.enterToMultOrDiv(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitToMultOrDiv) {
			listener.exitToMultOrDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitToMultOrDiv) {
			return visitor.visitToMultOrDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOrDivContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_multOrDiv; }
	public copyFrom(ctx: MultOrDivContext): void {
		super.copyFrom(ctx);
	}
}
export class MultiplicationContext extends MultOrDivContext {
	public multOrDiv(): MultOrDivContext {
		return this.getRuleContext(0, MultOrDivContext);
	}
	public MULT(): TerminalNode { return this.getToken(MyGrammarParser.MULT, 0); }
	public pow(): PowContext {
		return this.getRuleContext(0, PowContext);
	}
	constructor(ctx: MultOrDivContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends MultOrDivContext {
	public multOrDiv(): MultOrDivContext {
		return this.getRuleContext(0, MultOrDivContext);
	}
	public DIV(): TerminalNode { return this.getToken(MyGrammarParser.DIV, 0); }
	public pow(): PowContext {
		return this.getRuleContext(0, PowContext);
	}
	constructor(ctx: MultOrDivContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToPowContext extends MultOrDivContext {
	public pow(): PowContext {
		return this.getRuleContext(0, PowContext);
	}
	constructor(ctx: MultOrDivContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterToPow) {
			listener.enterToPow(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitToPow) {
			listener.exitToPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitToPow) {
			return visitor.visitToPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_pow; }
	public copyFrom(ctx: PowContext): void {
		super.copyFrom(ctx);
	}
}
export class PowerContext extends PowContext {
	public unaryMinus(): UnaryMinusContext {
		return this.getRuleContext(0, UnaryMinusContext);
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(MyGrammarParser.POW, 0); }
	public pow(): PowContext | undefined {
		return this.tryGetRuleContext(0, PowContext);
	}
	constructor(ctx: PowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterPower) {
			listener.enterPower(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitPower) {
			listener.exitPower(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitPower) {
			return visitor.visitPower(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryMinusContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_unaryMinus; }
	public copyFrom(ctx: UnaryMinusContext): void {
		super.copyFrom(ctx);
	}
}
export class ChangeSignContext extends UnaryMinusContext {
	public MINUS(): TerminalNode { return this.getToken(MyGrammarParser.MINUS, 0); }
	public unaryMinus(): UnaryMinusContext {
		return this.getRuleContext(0, UnaryMinusContext);
	}
	constructor(ctx: UnaryMinusContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterChangeSign) {
			listener.enterChangeSign(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitChangeSign) {
			listener.exitChangeSign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitChangeSign) {
			return visitor.visitChangeSign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToAtomContext extends UnaryMinusContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: UnaryMinusContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterToAtom) {
			listener.enterToAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitToAtom) {
			listener.exitToAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitToAtom) {
			return visitor.visitToAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstantPIContext extends AtomContext {
	public PI(): TerminalNode { return this.getToken(MyGrammarParser.PI, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterConstantPI) {
			listener.enterConstantPI(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitConstantPI) {
			listener.exitConstantPI(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitConstantPI) {
			return visitor.visitConstantPI(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantEContext extends AtomContext {
	public E(): TerminalNode { return this.getToken(MyGrammarParser.E, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterConstantE) {
			listener.enterConstantE(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitConstantE) {
			listener.exitConstantE(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitConstantE) {
			return visitor.visitConstantE(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleContext extends AtomContext {
	public DOUBLE(): TerminalNode { return this.getToken(MyGrammarParser.DOUBLE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterDouble) {
			listener.enterDouble(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitDouble) {
			listener.exitDouble(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitDouble) {
			return visitor.visitDouble(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntContext extends AtomContext {
	public INT(): TerminalNode { return this.getToken(MyGrammarParser.INT, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableContext extends AtomContext {
	public ID(): TerminalNode { return this.getToken(MyGrammarParser.ID, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracesContext extends AtomContext {
	public LPAR(): TerminalNode { return this.getToken(MyGrammarParser.LPAR, 0); }
	public plusOrMinus(): PlusOrMinusContext {
		return this.getRuleContext(0, PlusOrMinusContext);
	}
	public RPAR(): TerminalNode { return this.getToken(MyGrammarParser.RPAR, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterBraces) {
			listener.enterBraces(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitBraces) {
			listener.exitBraces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBraces) {
			return visitor.visitBraces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



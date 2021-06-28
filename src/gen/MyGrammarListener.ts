// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MultiplicationContext } from "./MyGrammarParser";
import { DivisionContext } from "./MyGrammarParser";
import { ToPowContext } from "./MyGrammarParser";
import { ToSetVarContext } from "./MyGrammarParser";
import { CalculateContext } from "./MyGrammarParser";
import { SetVariableContext } from "./MyGrammarParser";
import { PlusContext } from "./MyGrammarParser";
import { MinusContext } from "./MyGrammarParser";
import { ToMultOrDivContext } from "./MyGrammarParser";
import { ChangeSignContext } from "./MyGrammarParser";
import { ToAtomContext } from "./MyGrammarParser";
import { PowerContext } from "./MyGrammarParser";
import { ConstantPIContext } from "./MyGrammarParser";
import { ConstantEContext } from "./MyGrammarParser";
import { DoubleContext } from "./MyGrammarParser";
import { IntContext } from "./MyGrammarParser";
import { VariableContext } from "./MyGrammarParser";
import { BracesContext } from "./MyGrammarParser";
import { InputContext } from "./MyGrammarParser";
import { SetVarContext } from "./MyGrammarParser";
import { PlusOrMinusContext } from "./MyGrammarParser";
import { MultOrDivContext } from "./MyGrammarParser";
import { PowContext } from "./MyGrammarParser";
import { UnaryMinusContext } from "./MyGrammarParser";
import { AtomContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Multiplication`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiplication`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `ToPow`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	enterToPow?: (ctx: ToPowContext) => void;
	/**
	 * Exit a parse tree produced by the `ToPow`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	exitToPow?: (ctx: ToPowContext) => void;

	/**
	 * Enter a parse tree produced by the `ToSetVar`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	enterToSetVar?: (ctx: ToSetVarContext) => void;
	/**
	 * Exit a parse tree produced by the `ToSetVar`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	exitToSetVar?: (ctx: ToSetVarContext) => void;

	/**
	 * Enter a parse tree produced by the `Calculate`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	enterCalculate?: (ctx: CalculateContext) => void;
	/**
	 * Exit a parse tree produced by the `Calculate`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	exitCalculate?: (ctx: CalculateContext) => void;

	/**
	 * Enter a parse tree produced by the `SetVariable`
	 * labeled alternative in `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 */
	enterSetVariable?: (ctx: SetVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `SetVariable`
	 * labeled alternative in `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 */
	exitSetVariable?: (ctx: SetVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `Plus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	enterPlus?: (ctx: PlusContext) => void;
	/**
	 * Exit a parse tree produced by the `Plus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	exitPlus?: (ctx: PlusContext) => void;

	/**
	 * Enter a parse tree produced by the `Minus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	enterMinus?: (ctx: MinusContext) => void;
	/**
	 * Exit a parse tree produced by the `Minus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	exitMinus?: (ctx: MinusContext) => void;

	/**
	 * Enter a parse tree produced by the `ToMultOrDiv`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	enterToMultOrDiv?: (ctx: ToMultOrDivContext) => void;
	/**
	 * Exit a parse tree produced by the `ToMultOrDiv`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	exitToMultOrDiv?: (ctx: ToMultOrDivContext) => void;

	/**
	 * Enter a parse tree produced by the `ChangeSign`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	enterChangeSign?: (ctx: ChangeSignContext) => void;
	/**
	 * Exit a parse tree produced by the `ChangeSign`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	exitChangeSign?: (ctx: ChangeSignContext) => void;

	/**
	 * Enter a parse tree produced by the `ToAtom`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	enterToAtom?: (ctx: ToAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `ToAtom`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	exitToAtom?: (ctx: ToAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `Power`
	 * labeled alternative in `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by the `Power`
	 * labeled alternative in `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by the `ConstantPI`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterConstantPI?: (ctx: ConstantPIContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstantPI`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitConstantPI?: (ctx: ConstantPIContext) => void;

	/**
	 * Enter a parse tree produced by the `ConstantE`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterConstantE?: (ctx: ConstantEContext) => void;
	/**
	 * Exit a parse tree produced by the `ConstantE`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitConstantE?: (ctx: ConstantEContext) => void;

	/**
	 * Enter a parse tree produced by the `Double`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterDouble?: (ctx: DoubleContext) => void;
	/**
	 * Exit a parse tree produced by the `Double`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitDouble?: (ctx: DoubleContext) => void;

	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `Variable`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by the `Variable`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by the `Braces`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterBraces?: (ctx: BracesContext) => void;
	/**
	 * Exit a parse tree produced by the `Braces`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitBraces?: (ctx: BracesContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 */
	enterSetVar?: (ctx: SetVarContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 */
	exitSetVar?: (ctx: SetVarContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	enterPlusOrMinus?: (ctx: PlusOrMinusContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 */
	exitPlusOrMinus?: (ctx: PlusOrMinusContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	enterMultOrDiv?: (ctx: MultOrDivContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 */
	exitMultOrDiv?: (ctx: MultOrDivContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 */
	enterPow?: (ctx: PowContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 */
	exitPow?: (ctx: PowContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinus?: (ctx: UnaryMinusContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinus?: (ctx: UnaryMinusContext) => void;

	/**
	 * Enter a parse tree produced by `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}


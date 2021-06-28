// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MyGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToPow`
	 * labeled alternative in `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToPow?: (ctx: ToPowContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToSetVar`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToSetVar?: (ctx: ToSetVarContext) => Result;

	/**
	 * Visit a parse tree produced by the `Calculate`
	 * labeled alternative in `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculate?: (ctx: CalculateContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetVariable`
	 * labeled alternative in `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVariable?: (ctx: SetVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `Plus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlus?: (ctx: PlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `Minus`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinus?: (ctx: MinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToMultOrDiv`
	 * labeled alternative in `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToMultOrDiv?: (ctx: ToMultOrDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `ChangeSign`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeSign?: (ctx: ChangeSignContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToAtom`
	 * labeled alternative in `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToAtom?: (ctx: ToAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `Power`
	 * labeled alternative in `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConstantPI`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantPI?: (ctx: ConstantPIContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConstantE`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantE?: (ctx: ConstantEContext) => Result;

	/**
	 * Visit a parse tree produced by the `Double`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble?: (ctx: DoubleContext) => Result;

	/**
	 * Visit a parse tree produced by the `Int`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `Variable`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `Braces`
	 * labeled alternative in `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraces?: (ctx: BracesContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.setVar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVar?: (ctx: SetVarContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.plusOrMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusOrMinus?: (ctx: PlusOrMinusContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.multOrDiv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultOrDiv?: (ctx: MultOrDivContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.pow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPow?: (ctx: PowContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.unaryMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;

	/**
	 * Visit a parse tree produced by `MyGrammarParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}


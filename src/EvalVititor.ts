import { MyGrammarVisitor } from "./gen/MyGrammarVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { BracesContext, DivisionContext, IntContext, MinusContext, MultiplicationContext, MultOrDivContext, PlusContext, ToMultOrDivContext } from "./gen/MyGrammarParser";

export default class EvalVititor extends AbstractParseTreeVisitor<number>  implements MyGrammarVisitor<number>{
    
    protected defaultResult(): number {
       return 0;
    }

    aggregateResult(aggregate: number, nextResult: number) {
        return aggregate + nextResult
      }

    visitInt(ctx:IntContext):number{
        return parseInt(ctx.text);
    }
    visitBraces(ctx:BracesContext):number {
        console.log("最先访问");
        return this.visit(ctx.getChild(1));
    }
    visitPlus(ctx:PlusContext):number{
        console.log(ctx.getChild(1).text);
        var left=this.visit(ctx.getChild(0));
        var right=this.visit(ctx.getChild(2));
        console.log("当前值"+(left+right));
        return left+right;
    }

    visitMinus(ctx:MinusContext):number{
        console.log(ctx.getChild(1).text);
        var left=this.visit(ctx.getChild(0));
        var right=this.visit(ctx.getChild(2));
        console.log("当前值"+(left-right));
        return left-right;
    }

    visitMultiplication(ctx:MultiplicationContext):number{
        var left=this.visit(ctx.getChild(0));
        var right=this.visit(ctx.getChild(2));
        var ops=ctx.getChild(1).text;
        console.log(ops);
        return left*right;
    }

    visitDivision(ctx:DivisionContext):number{
        var left=this.visit(ctx.getChild(0));
        var right=this.visit(ctx.getChild(2));
        var ops=ctx.getChild(1).text;
        console.log(ops);
        console.log("当前值"+left/right);
        return left/right;
    }
}
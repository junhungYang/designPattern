/**包含了解释器之外的一些全局信息 */
class Context {
  private _input:string
  private _output:string
  get Input() {
    return this._input
  }
  set Input(value) {
    this._input = value
  }
  get Output() {
    return this._output
  }
  set Output(value) {
    this._output = value
  }
}

/**抽象表达式 */
abstract class AbstractExpression {
  public abstract Interpret(context:Context):void
}

/**终结符表达式 */
class TerminalExpression extends AbstractExpression {
  Interpret(context:Context) {
    console.log('终端解释器')
  }
}

/**非终结符表达式 */
class NonterminalExpression extends AbstractExpression {
  Interpret(context:Context) {
    console.log('非终端解释器')
  }
}

/**客户端 */
const context = new Context
const list:AbstractExpression[] = []
list.push(new TerminalExpression())
list.push(new NonterminalExpression())
list.push(new TerminalExpression())

list.forEach(exp => {
  /**对上下文中相关的表达式进行解释 */
  exp.Interpret(context)
})

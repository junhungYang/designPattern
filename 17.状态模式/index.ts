abstract class State {
  public abstract Handle(context:Context):void
}
class ConcreteStateA extends State {
  public Handle(context:Context) {
    context.state = new ConcreteStateB()  
    /**将Context的实例状态改变为 ConcreteStateB 的实例，
     * 下次Context的实例再次Request时 则触发的是 ConcreteStateB的Handle方法
    */
  }
}
class ConcreteStateB extends State {
  public Handle(context:Context) {
    context.state = new ConcreteStateA()
  }
}
class Context {
  constructor(private _state:State) {}
  get state() {
    return this._state
  }
  set state(value) {
    this._state = value
    console.log('当前状态' + this._state)
  }
  public Request():void {
    this.state.Handle(this) /**传入this */
  }
}
const c = new Context(new ConcreteStateA())
c.Request()
c.Request()
c.Request()
c.Request()
c.Request()
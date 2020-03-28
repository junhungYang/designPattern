/**抽象中介者 */
abstract class Mediator {
  /**定义一个抽线搞得发送消息方法 */
  public abstract Send(message:string,colleague:Colleague)
}
/**抽象同事类 */
abstract class Colleague {
  protected mediator:Mediator
}

/**具体中介者 */
class ConcreteMediator extends Mediator {
  colleague1:ConcreteColleague1
  colleague2:ConcreteColleague2
  
  public Send(message:string,colleague:Colleague) {
    if(colleague === this.colleague1) {
      this.colleague2.Notify(message)
    } else {
      this.colleague1.Notify(message)
    }
  }
}

/**具体同事类 */
class ConcreteColleague1 extends Colleague {
  constructor(protected mediator:Mediator) {
    super()
  }
  public Send(message) {
    this.mediator.Send(message,this)
  }
  public Notify(message) {
    console.log('同事1得到得到消息:' + message)
  }
}

class ConcreteColleague2 extends Colleague {
  constructor(protected mediator:Mediator) {
    super()
  }
  public Send(message) {
    this.mediator.Send(message,this)
  }
  public Notify(message) {
    console.log('同事2得到得到消息:' + message)
  }
}

/**客户端 */
const m = new ConcreteMediator()

// 让两个同事认识中介者
const c1 = new ConcreteColleague1(m) 
const c2 = new ConcreteColleague2(m)
// 让中介者认识两个同事对象
m.colleague1 = c1
m.colleague2 = c2

c1.Send('吃过饭了吗') /**通过m后，c2 得到该消息 */
c2.Send('没有呢，你请客？') /* 通过m后， c1得到该消息 */
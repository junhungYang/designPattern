/**抽象命令类 */
abstract class Command {
  protected receiver

  abstract ExcuteCommand()
}

/**烤羊肉串命令 */
class BakeMuttonCommand extends Command {
  constructor(receiver:Receiver) {
    super()
    this.receiver = receiver
  }

  public ExcuteCommand() { /**执行命令，执行具体的行为 */
    this.receiver.BakeMutton()
  }
}

class BakeChickenWingCommand extends Command {
  constructor(receiver:Receiver) {
    super()
    this.receiver = receiver
  }
  public ExcuteCommand() {
    this.receiver.BakeChickenWing()
  }
}

/**服务员类 */
class Waiter {
  private command:Command[]
  
  /**设置订单 */
  public  SetOrder(command:Command) {
    this.command.push(command)
  }

  /**通知执行 */
  public Notify() {
    this.command.forEach(item => {
      item.ExcuteCommand()
    })
  }
}

abstract class Receiver {
  abstract MakeMutton()
  abstract BakeChickenWing()
}

/**烤肉者 */
class Barbecuer extends Receiver {
  public MakeMutton() {
    console.log('烤羊肉串')
  }
  public BakeChickenWing() {
    console.log('考鸡翅')
  }
}

/**开店前准备 */
const boy = new Barbecuer()
const bakeMuttonCommand = new BakeMuttonCommand(boy)
const bakeChickenWindCommand = new BakeChickenWingCommand(boy)

const girl = new Waiter()
girl.SetOrder(bakeMuttonCommand)
girl.SetOrder(bakeChickenWindCommand)

/**下单完毕，通知厨房 */
girl.Notify()
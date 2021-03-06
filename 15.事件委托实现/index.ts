/**抽象观察者 */
class Observer {
  public Update() {}
}

/**抽象主题 */
class Subject {
  private events:Function[] = new Array()

  /**增加观察者 */
  public Attach(event) {
    this.events.push(event)
  }

  /**移除观察者 */
  public Detach(event) {
    this.events.find((item,index) => {
      if(item === event) {
        this.events.splice(index,1)
        return true
      }
    })
  }

  /**通知 */
  public Notify() {
    this.events.forEach(fn => fn())
  }
}

/**具体主题 */
class ConcreteSubject extends Subject {
  private _state:string = ''
  set state(value) {
    this._state = value
    this.Notify() /**当状态发生变化时，通知已记录的观察者 */
  }
  get state() {
    return this._state
  }
}

/**具体观察者 */
class ConcreteObserver extends Observer {
  constructor(private name:string) {
    super()
  }
  public Update() {
    console.log(`${this.name}收到通知，进行具体操作`)
  }
}

const observer1 = new ConcreteObserver('观察者1')
const observer2 = new ConcreteObserver('观察者2')
const s = new ConcreteSubject()
s.Attach(observer1)
s.Attach(observer2)
s.state = '我回来了'
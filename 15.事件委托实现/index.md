```typescript
class Subject {
  private events:Function[] = new Array()

  /**增加事件 */
  public Attach(event) {
    this.events.push(event)
  }

  /**移除事件 */
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


const observer1 = new ConcreteObserver('观察者1')
const observer2 = new ConcreteObserver('观察者2')
const s = new ConcreteSubject()
s.Attach(observer1.touchEvent) /*观察者1的touch事件*/
s.Attach(observer2.clickEvent) /*观察者2的click事件*/
s.state = '我回来了'
```

在观察者模式的基础上我们只需要把原来的增加观察者更改为增加事件，然后触发通知时直接触发相关注册了的事件即可。


### 事件委托说明
委托就是一种引用方法的类型。一旦为委托分配了方法，委托将与该方法具有完全相同的行为。委托方法的使用可以像其他任何方法一样，具有参数和返回值。委托可以看作是对函数的抽象，是函数的‘类’，委托的实例讲代表一个具体的函数（这里的委托并不与上面的例子完全想过，具体可参考[时间委托](./../0.基础/index.md)）


一个委托可以搭载多个方法，所有方法被依次唤起。更重要的是，它可以使得委托对象所搭载得方法并不属于同一个类，即可以来自任意类，同时它也不需要知道这个方法是属于哪个类的，即解除了通知者和观察者之间的耦合问题。
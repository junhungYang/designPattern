工厂方法模式是在简单工厂模式基础上的提升，简单工厂模式的最大问题是所有产品的创建都在一个工厂类中完成，当我们需要增加新的种类的产品时，我们还需要修改工厂类中的代码去增加新种类产品创建的相关逻辑，即**简单工厂其实违背了开放-封闭原则**。所以**工厂方法模式是为了符合开放封闭原则而在简单工厂模式的基础上衍生出来的**

```typescript
class Operation {
  private _A = 0
  private _B = 0

  get A() { return this._A }
  set A(value) { this._A = value }

  get B() { return this._B }
  set B(value) { this._B = value }

  GetResult() { return 0 }
}

class Add extends Operation {
  GetResult() { return this.A + this.B }
}

class Sub extends Operation {
  GetResult() { return this.A - this.B }
}

class IFactory {
  public createOperation() {}
}

class AddFactory extends IFactory {
  public createOperation() {
    return new Add()
  }
}

class SubFactory extends IFactory {
  public createOperation() {
    return new Sub()
  }
}

const operFactory = new AddFactory()
const oper = operFactory.createOperation()
oper.A = 1
oper.B = 2
console.log(oper.GetResult())
```

与简单工厂模式不同的在于 IFactory 被提升为抽象类 同时IFactory类去除了 创建算法的 switch判断，**在工厂方法模式中switch算法判断被移交给了客户端，但简单工厂模式可以把判断移交给工厂类，所以工厂方法模式与简单工厂模式各有利弊**。但为了工厂方法模式中的该问题，我们还可以借助其他的手段，就是用**反射解决客户端switch判断问题**

### 雷锋工厂
雷锋工厂其实就是一个典型的工厂方法模式，学雷锋是一种很好的社会风气，对于受帮助的人而言其实他并不需要知道帮助他的人究竟是谁，因为各种社会阶层的人都可以学雷锋，受帮助的人只需要知道他们都是在学雷锋就可以了。

在这里 雷锋类是一个抽象类，学生类去继承雷锋类，这是学生学雷锋；社区志愿者去继承雷锋类，这是社区志愿者学雷锋。当学生需要多次帮助老人时，我们只需要像上面的加法运算一样多次getResult就可以了，而假如某一天学生要上课需要换成志愿者时，我们也只需要把AddFactory换成SubFactory就可以了（这里把SubFactory类比为志愿者）。即在**多次引用的情况下，当出现需求变化时，工厂方法模式中我们只需要修改一次实例方法对象的方式**。

而在简单工厂模式中 由于学生多次帮助老人需要在工厂类中对次传入+号生成加法对象(具体参照[简单工厂模式](../1.简单工厂模式/index.md))，所以当学生换成志愿者时我们也需要多次把传入的+号改为减号。即在**多次引用的情况下，当出现需求的变化时，简单工厂模式需要修改多处地方**。
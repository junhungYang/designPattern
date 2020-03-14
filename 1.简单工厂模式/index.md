# 紧耦合vs松耦合

### 紧耦合：

```typescript
class Operation {
  static GerResult (A:number,B:number,operate:string) {
    let result:number | null = null
    switch(operate) {
      case '+':
        result = A + B
        break
      case '-':
        result = A - B
        break
      case '*':
        result = A * B
        break
      case '/':
        result = A / B
        break
    }
    return result
  }
}
```

当需要增加一个平方根运算时，我们当然可以在switch中增加一个分支用于作开根运算，但这里存在一个问题是，**事实上我们在开根运算中，只需要用到开跟运算即可，但为何却需要让其他4种运算都参与到编译呢？显然这是不合理的**

其次在**多人协作开发中**，事实上只需要增加一个平方根运算即可，却**需要把整个类给予对方对方进行修改这也是不保险的**，所以当前情况 是一种紧耦合的情况

### 松耦合
所以事实上我们需要做的就是将加减乘除运算分离开来，已达其中一个修改并步影响另外的几个，同时运算算法也不影响其他代码（以下代码运用到**继承**与**多态**）

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

class Mul extends Operation {
  GetResult() { return this.A * this.B }
}

class Div extends Operation {
  GetResult() { return this.A / this.B}
}

const add = new Add()
add.A = 1
add.B = 2
add.GetResult()
```
以上代码即为一种松耦合代码，松耦合的思想解决了紧耦合中所存在的两个问题

> 1. 在该代码中，当我们只想使用加法运算时，我们只需要生成一个加法类，其余算法都无需参与参与编译。
> 2. 当我们需要新增一个平方根运算时，无需把整个Operation类也给到另外的开发人员，而只需要让新的 平方根运算类 继承 父类 Operation即可。

# 简单工厂模式
对于如何去实例化对象的问题，我们这里可以运用“简单工厂模式”，也就是说，到底要实例化谁，将来会不会增加实例化的对象，比如增加开根运算，这是很容易变化的地方，应该考虑用一个单独的类来做这个创造实例的过程，这就是工厂
```typescript
class OperationFactory {
  createOperate (operate:string) {
    let oper = null
    switch (operate) {
      case '+':
        oper = new Add()
        break
      case '-':
        oper = new Sub()
        break
      case '*':
        oper = new Mul()
        break
      case '/':
        oper = new Div()
        break
    }
    return oper
  }
```
在这段代码中，假如有一天我们需要更改加法运算时，我们只需要修改Add子类即可，假如我们需要增加平方根，立方根，自然对数.....我们只需要创建对应的子类并继承父类Operation，以及在运算类工厂里增加分支即可。
**装饰模式(Decorator)**，动态地给一个对象添加一些额外的职责，就增加功能而言，装饰模式比生成子类更为灵活

![1](./1.jpg)

Component是定义一个对象接口，可以给这些对象动态地添加职责，ConcreteComponent是定义了一个具体的对象，也可以给这个对象添加一些职责。Decorator，装饰抽象类，继承了Component，从外类来拓展Component类的功能，但对于Component来说，无需知道Decorator的存下。
```typescript
class Component {
  public Operation() {}
}
class ConcreteComponent extends Component {
  public Operation() {
    console.log('具体对象的操作')
  }
}

class Decorator extends Component {
  protected component:Component

  public setComponent(component) { /**设置component */
    this.component = component
  }

  public Operation() {
    if(this.component !== null) {
      this.component.Operation()
    }
  }
} 

class ConcreteDecoratorA extends Decorator {
  public Operation() {
    super.Operation() /**运行原Component的Operation操作 */
    console.log('可以对super.component 进行装饰操作')
  }
}

class ConcreteDecoratorB extends Decorator {
  public Operation() {
    super.Operation() 
    /**假如多个装饰器调用了，父类的同一方法时，应注意是否父类的方法中会否对最后的结果产生叠加效应*/
    console.log('可以对super.component 进行装饰操作')
  }
}


const c = new ConcreteComponent()
const d1 = new ConcreteDecoratorA()
const d2 = new ConcreteDecoratorB()

d1.setComponent(c)
d1.Operation()

d2.setComponent(d1)
d2.Operation()
```

装饰模式是利用SetComponent来对对象进行封装。这样每个装饰对象的实现就和如何使用这个对象分离开了，每个装饰对象只关心自己的功能，不需要关心如何被添加到对象链当中

## 总结
**装饰模式是为已有功能动态地添加更多功能的一种方式**，需要注意的是在适合使用装饰模式的情况中，这些**需要被添加的功能一般是为满足一些特定情景且没有先后顺序或制约关系的**，如一个人穿衣打扮，他可以先穿裤再穿衣，也可以先穿衣再穿裤，他甚至可以先穿外裤，再穿内裤（超人）。

**错误做法**：当系统需要新功能时，是向旧的类中添加新的代码。这些代码通常装饰了原有类的核心职责或主要行为，但这种做法的问题在于，它们在**主类中加入了新的字段，新的方法和新的逻辑，从而增加了主类的复杂度**，例如某个人要穿西装，但是把穿西装的功能加入到主类中，这是错误的。

**而新加入的东西仅仅是为了满足一些只在特定情况下才会执行的特殊行为的需要时**，装饰模式提供了一个非常好的解决方案。

**装饰模式把每个要装饰的功能放在单独的类中，并让这个类包装它所要装饰的对象**，因此当需要执行特殊行为时，客户代码旧可以在运行时根据需要有选择地、按照自己所希望的顺序去使用装饰功能包装对象了。

所以装饰模式的**优点是，有效地把类的核心职责（装饰的目标主类）和装饰功能区分开，同时去除相关类的重复装饰逻辑（一个装饰类负责一个装饰，需要多个装饰时调用多个装饰对象）**

****

**装饰类装饰主类**
```typescript
d1.setComponent(c)
d1.Operation()

d2.setComponent(d1)
d2.Operation()
```
这里需要分清主语和谓语。在这段代码中我们会发现，我们始终使用的是d1,d2去调用装饰功能，而不是c去调用装饰功能，同时d1调用完装饰功能后，用d2去调用装饰功能。有时候我们可能会为了保持某种程度上的代码一致，会使用c去连续调用多个功能，但这在装饰模式中是不合理的。

举个简单的例子，当一个人什么都没穿时是c状态，这个人穿了一件上衣后是d1状态，它就不再是什么都没穿的c状态了，而是穿了上衣后的d1状态，所以当这个人再穿裤子时，就应该是以d1的状态去穿裤子变成d2的状态，当然 因为d1状态包装了c状态，所以当这个人处于d1状态时，他也应该具备c状态下的功能，同样因为d2状态包装了c,d1状态，所以d2状态下的这个人同样具备c和d1状态下的所有功能。

**这就是“包装”的真实含义，它不是一种改变的倾向，而是一种叠加涵盖的动机**。


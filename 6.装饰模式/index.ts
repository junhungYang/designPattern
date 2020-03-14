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
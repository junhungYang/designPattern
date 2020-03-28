/**Vistor类，对应‘男人’‘女人’的状态 */
abstract class Visitor {
  public abstract VisitConcreteElementA(concreteElementA:ConcreteElementA):void
  public abstract VisitConcreteElementB(concreteElementB:ConcreteElementB):void
}
/**具体访问者1，对应‘恋爱’状态时 */
class ConcreteVisitor1 extends Visitor {
  VisitConcreteElementA(concreteElementA:ConcreteElementA) {
    console.log(concreteElementA, 'A相关的行为')
  }
  VisitConcreteElementB(concreteElementB:ConcreteElementB) {
    console.log(concreteElementB, 'B相关的行为')
  }
}
/**‘失败’状态时 */
class ConcreteVisitor2 extends Visitor {
  VisitConcreteElementA(concreteElementA:ConcreteElementA) {
    console.log(concreteElementA, 'A相关的行为')
  }
  VisitConcreteElementB(concreteElementB:ConcreteElementB) {
    console.log(concreteElementB, 'B相关的行为')
  }
}

/**元素类，对应人类 */
abstract class Element1 {
  abstract Accept(visitor:Visitor):void
}

/**对应男人 */
class ConcreteElementA extends Element1 {
  Accept(visitor:Visitor) {
    visitor.VisitConcreteElementA(this)
  }
  OperationA() {
    /**其他相关的方法 */
  }
}

class ConcreteElementB extends Element1 {
  Accept(visitor:Visitor) {
    visitor.VisitConcreteElementB(this)
  }
  OperationA() {
    /**其他相关的方法 */
  }
}
/**数据结构类 */
class ObjectStructure {
  private elements:Element1[] = []
  public Attach(element:Element1) {
    this.elements.push(element)
  }
  public Accept(visitor:Visitor) {
    this.elements.forEach(e => {
      e.Accept(visitor)
    })
  }
}

/**客户端 */
const o = new ObjectStructure()
o.Attach(new ConcreteElementA())
o.Attach(new ConcreteElementB())

const v1 = new ConcreteVisitor1()
const v2 = new ConcreteVisitor2()

o.Accept(v1) /**恋爱时，男人和女人的行为 */
o.Accept(v2) /**失败时，男人和女人的行为 */


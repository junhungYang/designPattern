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
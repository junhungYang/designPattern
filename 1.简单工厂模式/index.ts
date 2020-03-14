/**紧耦合vs松耦合 */

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

class OperationFactory {
  static createOperate (operate:string) {
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
}
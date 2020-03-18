class A {
  _name:string = ''
  public sex:string = 'male'
  private age:number = 18
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}

class Cat {
  private CatShout:Function[] = []/**事件方法 */
  constructor(private name:string) {}

  public CatShoutEventHandler(fn:Function) { /**委托 */
    this.CatShout.push(fn)
  }
  
  public Shout() { /**事件 */
    console.log(`瞄，我是${this.name}`)
    this.CatShout.forEach(fn => fn())
  }
}

class Mouse {
  constructor(private name:string) {}
  public run() {
    console.log(`${this.name}说：猫来了，快跑`)
  }
}

const cat = new Cat('tom')
const mouse1 = new Mouse('Jerry')
const mouse2 = new Mouse('Jack')

cat.CatShoutEventHandler(mouse1.run)
cat.CatShoutEventHandler(mouse2.run)
/**表示将Mouse的Run方法 通过Cat的委托 CatShoutEventHandler 登记到Cat的shout事件的方法数组CatShout当中。*/
cat.Shout()
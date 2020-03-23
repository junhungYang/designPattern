/**发起人（可以简单地理解为游戏） */
class Originator {
  private _state:string = ''
  get state () {
    return this._state
  }
  set state(value) {
    this._state = value
  }

  /**创建一个备忘录，将当前需要保存的信息导入并实例化出一个Memento对象 */
  public CreateMemento() { /**保存 */
    return new Memento(this.state)
  }

  /**恢复备忘录，将Memento 导入并将相关数据恢复 */
  public SetMemento(memento) { /**读取 */
    this.state = memento.state
  }

  public Show() {
    console.log(this.state)
  }
}

/**备忘录类（备份） */
class Memento {
  constructor(private _state:string) {}

  get state () {
    return this._state
  }
}

/**管理者 管理备忘录 */
class Caretaker {
  private _memento:Memento
  get memento() {
    return this._memento
  }
  set memento(memento:Memento) {
    this._memento = memento
  }
}

const o = new Originator()
o.state = 'on' /**开始游戏 */
o.Show()

const c = new Caretaker()
c.memento = o.CreateMemento() /**保存游戏 */

o.state = 'off' /**关闭游戏 */
o.Show()

o.SetMemento(c.memento) /**读取进度 */
o.Show()
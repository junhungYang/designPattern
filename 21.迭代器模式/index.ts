class ConcreteIterator {
  private current = 0
  constructor(private aggregate:any[]) {  /**具体聚集对象 */
  }
  public First() {
    return this.aggregate[0]
  }
  public Next() {
    this.current ++
    if(this.current < this.aggregate.length) {
      return this.aggregate[this.current]
    }
  }
  public Current() {
    return this.aggregate[this.current] 
  }
}

const a = [1,2,3,4,5,6,7,8,9]
const i = new ConcreteIterator(a)

const first = i.First()
const curr = i.Current()
i.Next()
i.Next()
console.log(i.Current())

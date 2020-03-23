**迭代器模式(Iterator)**，提供一种方法顺序访问一个聚合对象中各个元素，而又不暴露该对象的内部表示

当你需要访问一个聚集对象，而且不管这些对象是什么都需要遍历的时候，就应该考虑用迭代器模式。

你需要对聚集有多种方式遍历时(从头到尾、从尾到头)，可以考虑使用迭代器模式

为便利不同的聚集结构提供如开始、下一个、是否结束、当前哪一项等统一的接口。

现金迭代器模式的实用意义元不如学习价值大，原因是很多高级编程语言都已经把该模式做在语言中了 如 foreach、for in、for of等等
```typescript
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

```
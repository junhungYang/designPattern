abstract class Component {
  public name:string

  abstract Add (c:Component):void
  abstract Remove (c:Component):void
  abstract Display(depth:number):void
}

/**叶结点 */
class Leaf extends Component {
  constructor(public name:string) {
    super()
  }
  public Add(c:Component):void {
    console.log('cannot add to a leaf')
  }
  public Remove(c:Component):void {
    console.log('cannot remove from a leaf')
  }
  public Display(depth:number):void {
    console.log(`第${depth}级，${this.name}`)
  }
}

/*有枝结点 */
class Composite extends Component {
  private children:Component[] = []
  constructor(public name:string) {
    super()
  }
  public Add(c:Component):void {
    this.children.push(c)
  }
  public Remove(c:Component):void {
    this.children.find((child,i) => {
      if(child === c) {
        this.children.splice(i)
        return true
      }
    })
  }
  public Display(depth:number):void {
    console.log(`第${depth}级，${this.name}`)
    this.children.forEach(child => console.log(`${this.name}的子级，${child.name}`))
  }
}

/**客户端代码 */
const root = new Composite('root') /**跟结点 */
root.Add(new Leaf('Leaf A'))
root.Add(new Leaf('Leaf B'))

const comp = new Composite('Composite X') 
comp.Add(new Leaf('Leaf XA'))
comp.Add(new Leaf('Leaf XB'))
root.Add(comp) /**root 的孩子结点 */

const comp2 = new Composite('Composite XY')
comp.Add(new Leaf('Leaf XYA'))
comp.Add(new Leaf('Leaf XYB'))
root.Add(comp2) /**root的孩子结点 */

root.Add(new Leaf('Leaf C'))

const leaf = new Leaf('Leaf D')
root.Add(leaf) /**root的孩子结点，该孩子结点是一个叶结点 */
root.Remove(leaf)

root.Display(1) /**展示树结构 */

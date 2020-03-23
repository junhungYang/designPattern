/**适配器抽象类 */
class Target {
  public Request() {
    console.log('普通请求')
  }
}
/**需要被适配的类 */
class Adaptee {
  public SpecificRequest() {
    console.log('特殊请求')
  }
}
/**具体的适配器 */
class Adapter extends Target {
  private adaptee = new Adaptee() 
  public Request() {
    this.adaptee.SpecificRequest()
    /**这样就可以把表面上调用Request()方法变成实际调用 SpecificRequest */
  }
}

const target = new Adapter()
target.Request()

class Subject {
  public request() {}
}

/**请求者 */
class RealSubject extends Subject {
  public request() {
    console.log('真实的请求')
  }
}

/**中介者 */
class Proxy1 extends Subject {
  protected realSubject:Subject
  public request() {
    if(this.realSubject === null) {
      this.realSubject = new RealSubject()
    }
    /**在发送请求前可以卡各类条件去控制对目标的访问 */
    this.realSubject.request()
  }
}


const proxy1 = new Proxy1()
proxy1.request()
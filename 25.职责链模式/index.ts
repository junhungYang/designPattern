abstract class Handler {
  protected successor:Handler
  public SetSuccessor(successor:Handler) {
    this.successor = successor
  }
  public abstract HandleRequet(request):void
}

class ConcreteHandler1 extends Handler {
  public HandleRequet(request:Number) {
    if(request >= 0 && request < 10) {
      console.log('处理请求')
    }else if(this.successor !== null){
      this.successor.HandleRequet(request)
    }
  }
}

class ConcreteHandler2 extends Handler {
  public HandleRequet(request) {
    if(request >= 10 && request < 20) {
      console.log('处理请求')
    }else if(this.successor) {
      this.successor.HandleRequet(request)
    }
  }
}

class ConcreteHandler3 extends Handler {
  public HandleRequet(request) {
    if(request >= 20 && request < 30) {
      console.log('处理请求')
    }else if(this.successor) {
      this.successor.HandleRequet(request)
    }
  }
}

/**客户端 */
const h1 = new ConcreteHandler1()
const h2 = new ConcreteHandler2()
const h3 = new ConcreteHandler3()
h1.SetSuccessor(h2)
h2.SetSuccessor(h3)

const request = [2,5,14,22,18,3,27,20]

request.forEach(req => h1.HandleRequet(req))

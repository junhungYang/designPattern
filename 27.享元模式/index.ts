abstract class Flyweight {
  public abstract Operation(state):void
}

class ConcreteFlyweight extends Flyweight {
  public Operation(state) {
    console.log(`具体Flyweight:${state}`)
  }
}

class UnsharedConcreteFlyweight extends Flyweight {
  public Operation(state) {
    console.log(`不共享的具体Flyweight:${state}`)
  }
}

/**享元工厂，用于创建并管理Flyweight对象 */
class FlyweightFactory {
  private flyweights = {
    x: null,
    y: null,
    z: null
  }
  constructor() {
    this.flyweights.x = new ConcreteFlyweight()
    this.flyweights.y = new ConcreteFlyweight()
    this.flyweights.z = new ConcreteFlyweight()
  }

  public GetFlyweight(key:string):Flyweight {
    return this.flyweights[key]
  }
}

let state = 22
const f = new FlyweightFactory()
const fx = f.GetFlyweight('x')
fx.Operation(--state)
const fy = f.GetFlyweight('y')
fy.Operation(--state)
const fz = f.GetFlyweight('z')
fz.Operation(--state)

const uf = new UnsharedConcreteFlyweight()
uf.Operation(--state)
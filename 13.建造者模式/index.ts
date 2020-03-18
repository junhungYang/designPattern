abstract class PersonBuilder {
  public buildHead() {}
  public buildBody() {}
  public buildArmLeft() {}
  public buildArmRight() {}
  public buildLegLeft() {}
  public buildLegRight() {}
}

class PersonThinBuilder extends PersonBuilder {
  public buildHead() {
    console.log('瘦人的头')
  }
  public buildBody() {
    console.log('瘦人的身体')
  }
  public buildArmLeft() {
    console.log('瘦人的左手')
  }
  public buildArmRight() {
    console.log('瘦人的右手')
  }
  public buildLegLeft() {
    console.log('瘦人的左脚')
  }
  public buildLegRight() {
    console.log('瘦人的右脚')
  }
}

class PersonFatBuilder extends PersonBuilder {
  /**方法重写 省略 */
}

/**指挥者 */
class PersonDirector {
  private pb:PersonBuilder
  constructor (pb) {
    this.pb = pb
  }
  public createPerson() {
    this.pb.buildHead()
    this.pb.buildBody()
    this.pb.buildArmLeft()
    this.pb.buildArmRight()
    this.pb.buildLegLeft()
    this.pb.buildLegRight()
  }
}

const ptb = new PersonThinBuilder()
const pdThin = new PersonDirector(ptb)
pdThin.createPerson()



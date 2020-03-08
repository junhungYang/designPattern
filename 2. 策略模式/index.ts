/**现金收费抽象类 */
class CashSuper {
  acceptCash(money:number) {}
}
/**正常收费子类 */
class CashNormal extends CashSuper {
  acceptCash(money:number) {
    return money
  }
}
/**打折收费子类 */
class CashRebate extends CashSuper {
  /**用于初始化折扣率 */
  constructor(public moneyRebate:number) { 
    super()
  }
  acceptCash(money) {
    return money * this.moneyRebate
  }
}
/**返利收费子类 */
class CashReturn extends CashSuper {
  constructor(public moneyCondition:number,public moneyReturn:number) {
    super()
  }
  acceptCash(money:number) {
    let result = money
    if(money >= this.moneyCondition) {
      /**实收/返利标准 等于 返利个数，实收 - 返利个数*单位返利金额 = 实际返利金额 */
      result = money - Math.floor(money/this.moneyCondition)*this.moneyReturn
    }
    return result
  }
}


class Context {
  constructor(public strategy:any) {
    /**接受一个算法实例 */    
  }
  contextInterface() {
    return this.strategy.acceptCash()
  }
}

const context = new Context(new CashReturn(300,100))
context.contextInterface()

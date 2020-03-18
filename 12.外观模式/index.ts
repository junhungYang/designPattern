 class Stock {
  name:string
  public sell() {
    console.log(`${this.name} 卖出`)
  }
  public buy() {
    console.log(`${this.name} 买入`)
  }
}

class Stock1 extends Stock {
  name:string = '股票1'
}

class Stock2 extends Stock {
  name:string = '股票2'
}

class Stock3 extends Stock {
  name:string = '股票3'
}

/**基金类 */
class Fund {
  private gu1 = new Stock1()
  private gu2 = new Stock2()
  private gu3 = new Stock3()

  public buyFund() {
    this.gu1.buy()
    this.gu2.buy()
    this.gu3.buy()
  }

  public sellFund() {
    this.gu1.sell()
    this.gu2.sell()
    this.gu3.sell()
  }
}

const jijin = new Fund()
jijin.buyFund()
jijin.sellFund()
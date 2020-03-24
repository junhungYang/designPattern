/**手机软件 */
abstract class HandsetSoft {
  public abstract Run()
}

/**手机游戏 */
class HandsetGame extends HandsetSoft {
  public Run() {
    console.log('运行手机游戏')
  }
}

/**手机通讯录 */
class HandsetAddressList extends HandsetSoft {
  public Run() {
    console.log('运行手机通讯录')
  }
}

abstract class HandsetBrand {
  protected soft:HandsetSoft
  
  /**品牌需要关注软件，所以可在机器中安装软件，以备运行 */
  public setHandsetSoft(soft:HandsetSoft) {
    this.soft = soft
  }
  
  /**运行 */
  public abstract Run() 
} 

/**手机品牌N */
class HandsetBrandN extends HandsetBrand {
  public Run() {
    this.soft.Run()
  }
}

/**手机品牌M */
class HandsetBrandM extends HandsetBrand {
  public Run() {
    this.soft.Run()
  }
}

let ab = new HandsetBrandN
ab.setHandsetSoft(new HandsetGame())
ab.Run()

ab.setHandsetSoft(new HandsetAddressList())
ab.Run()

ab = new HandsetBrandM
ab.setHandsetSoft(new HandsetGame())
ab.Run()

ab.setHandsetSoft(new HandsetAddressList())
ab.Run()



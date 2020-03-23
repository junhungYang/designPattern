class Singleton {
  private static instance:Singleton
  public static getInstance() {
    if(!this.instance) {
      this.instance = new Singleton()
    } 
    return this.instance
  }
}

const s1 = Singleton.getInstance()
const s2 = Singleton.getInstance()

if(s1 === s2) {
  console.log('两个对象是相同的实例')
}
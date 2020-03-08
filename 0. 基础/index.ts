class A {
  _name:string = ''
  public sex:string = 'male'
  private age:number = 18
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}
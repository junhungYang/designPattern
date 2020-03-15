function A() {

}

A.prototype.clone = function (target = {}) {
  return JSON.parse(JSON.stringify(target))
}
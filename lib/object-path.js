module.exports = function resolve(object, path) {
  var steps = path.split(".")
  var value = object
  for (var i = 0; i < steps.length; i++) {
    var step = steps[i]
    if (value === null || typeof value === "undefined") {
      return undefined
    } else {
      value = value[step]
    }
  }
  return value
}

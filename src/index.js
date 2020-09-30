
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    return Math.min.apply(null, array);
  } 
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    return Math.max.apply(null, array);
  } 
  return 0;
}

exports.avg = function avg (array) {
  let res = 0;
  if (Array.isArray(array) && array.length) {
    for (let i = 0; i < array.length; i ++) {
      res += array[i];
      }
      res /= array.length;
      return res;
  }
  return 0;
}

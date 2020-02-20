
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    return array.sort((x, y) => x-y)[0];
  };
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    return array.sort((x, y) => y-x)[0];
  };
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/array.length;
  };
  return 0;
}

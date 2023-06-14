Array.prototype.isEqual = function (array) {
  if (this.every((ele, idx) => ele === array[idx])) {
    return true;
  } else {
    return false;
  }
};

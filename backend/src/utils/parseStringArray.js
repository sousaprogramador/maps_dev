module.exports = function parseStringArray(arrayAsString) {
  return arrayAsString.split(",").map(arrayAsString => arrayAsString.trim());
};

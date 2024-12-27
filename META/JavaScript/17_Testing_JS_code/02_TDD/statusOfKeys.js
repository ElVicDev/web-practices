function statusOfKeys(keys) {
  console.log(keys);
}
statusOfKeys(1 == 0); // false
statusOfKeys(1 == 1); // true

module.exports = statusOfKeys;

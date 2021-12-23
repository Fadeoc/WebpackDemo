const replacer = function (sourceStr) {
  return sourceStr.replace('内存中', '内存中并向你扔了一个软弱无力导致console.log被移除了').replace(/console\.log\(([^)]+)\);?/g, '');
}

const ReplaceTextLoader = function (sourceStr) {
  return replacer(sourceStr)
}

module.exports = ReplaceTextLoader;

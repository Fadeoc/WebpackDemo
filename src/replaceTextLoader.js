const replacer = function (content) {
  return content.replace('内存中', '内存中并向你扔了一个软弱无力导致console.log被移除了').replace(/console\.log\(([^)]+)\);?/g, '');
}

const ReplaceTextLoader = function (content) {
  return replacer(content)
}

module.exports = ReplaceTextLoader;

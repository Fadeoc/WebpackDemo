// 隐藏的定义 const module = {
//    exports: {}
// }


// 所以这是local而非global的

// 直接定义
const name = 'commonA';

module.exports = {
   name: name
}

// const exports = module.exports
// exports - module.export 的缩写
// exports.name = name;
// exports.logFunc = function () {
//   console.log(1111111)
// }

// 隐藏的定义 const module = {
//    exports: {}
// }
// const exports = module.exports

// 所以这是local而非global的

// 直接定义
const name = 'commonA';


// module.exports = {
//    name: name
// }

// exports - module.export 的缩写
// exports.name = name;
// exports.logFunc = function () {
//   console.log(1111111)
// }

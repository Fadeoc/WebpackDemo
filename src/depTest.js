window.depTest = {
  logEntry: function () {
    alert('dep entry loaded')
  }
}

export function asyncLoad() {
  alert('异步加载了')
}

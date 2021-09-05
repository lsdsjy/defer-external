export function defer(url, varName) {
  let instance

  function ensure() {
    if (instance) {
      return instance
    }
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      eval(xhr.responseText)
      instance = window[varName]
    })
    xhr.open('GET', url, false)
    xhr.send()
  }

  return new Proxy(() => {}, {
    apply(_, thisArg, args) {
      ensure()
      return Reflect.apply(instance, thisArg, args)
    },
    get(_, p) {
      ensure()
      return Reflect.get(instance, p)
    },
  })
}

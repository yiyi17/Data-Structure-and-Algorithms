function nextTick(fn) {
  if(process !== undefined && typeof process.nextTick === 'function') {
    return process.nextTick(fn)
  }
  var counter = 1
  const observer = new MutationObserver(fn)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  textNode.data = String(++counter)
}
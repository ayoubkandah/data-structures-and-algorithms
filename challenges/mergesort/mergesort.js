const mergeArrays = (a, b) => {
    const c = []
  
    while (a.length && b.length) {
      c.push(a[0] > b[0] ? b.shift() : a.shift())
    }
  
    while (a.length) {
      c.push(a.shift())
    }
    while (b.length) {
      c.push(b.shift())
    }
  
    return c
  }
  
  const mergeSort = (a) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const left = a.slice(0, middle)
    const right = a.slice(middle, a.length)
    const sortedL = mergeSort(left)
    const sortedR = mergeSort(right)
    return mergeArrays(sortedL, sortedR)
  }
  
  module.exports=mergeSort
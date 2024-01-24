function decode(message) {
  // Code here
  let result = ''
  const accumulated = []

  for (const character of message.split('')) {
    if (character === '(') {
      accumulated.push('')
      continue
    }

    if (character === ')') {
      const inverted = accumulated.pop().split('').reverse().join('')
      if (accumulated.length > 0) {
        accumulated[accumulated.length - 1] +=  inverted
        continue
      }
      result = result + inverted
      continue
    }

    if (accumulated.length > 0) {
      accumulated[accumulated.length -1] += character
      continue
    }

    result += character
  }

  return result
}


const a = decode('sa(u(cla)atn)s')
console.log(a) // hola mundo
function findNaughtyStep(original, modified) {
  // Code here

  if (original === modified) { return '' }

  if (original === '') { return modified }

  if (modified === '') { return original }

  let secMenor = original
  let secMayor = modified

  if (original.length > modified.length) {
    secMenor = modified
    secMayor = original
  }

  for (let i=0; i < secMenor.length; i++) {
    if (secMenor[i] !== secMayor[i]) {
      return secMayor[i]
    }
  }
  
  return secMayor[secMayor.length - 1]
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
console.log(findNaughtyStep(original1, modified1)) // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
console.log(findNaughtyStep(original2, modified2)) // ''

const original3 = 'xxxx'
const modified3 = 'xxoxx'
console.log(findNaughtyStep(original3, modified3)) // ''
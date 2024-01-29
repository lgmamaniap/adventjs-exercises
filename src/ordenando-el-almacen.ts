interface IClassified {
  cantidad: string
  caracter: string
}

function organizeGifts(gifts: string) {
  // Code here

  const clasificator = (text: string) => {
    const defaultItem: IClassified = {
      cantidad: '',
      caracter: ''
    }

    const classified: Array<IClassified> = [{ ...defaultItem }]
    let accumulatorIndex: number = 0

    for (const character of gifts.split('')) {
      if (!classified[accumulatorIndex])
        classified.push({ ...defaultItem })
      if (
        character.charCodeAt(0) > 96 &&
        character.charCodeAt(0) < 123
      ) {
        classified[accumulatorIndex].caracter = character
        accumulatorIndex++
        continue
      }
      classified[accumulatorIndex].cantidad += character
    }
    return classified
  }

  const organizator = (size: number, character: string) => {
    const boxSize: number = 10
    const paleSize: number = 5

    const additional: number = size % boxSize
    const boxNumber: number = Math.floor(size / boxSize)

    const paleNumber: number = Math.floor(boxNumber / paleSize)
    const boxes: number = boxNumber % paleSize

    return `[${character}]`.repeat(paleNumber) +
      `{${character}}`.repeat(boxes) +
      `${additional > 0 ? `(${character.repeat(additional)})` : ''}`
  }

  const classified = clasificator(gifts)

  let result = ''
  for (const item of classified) {
    result += organizator(Number(item.cantidad), item.caracter)
  }

  return result
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)

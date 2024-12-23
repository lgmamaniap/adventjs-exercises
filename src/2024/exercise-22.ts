// Generate gift combinations

function generateGiftSets(gifts: string[]): string[][] {
  if (gifts.length === 1) return [gifts]

  const acc: Array<Array<Array<string>>> = []
  for (let i = 0; i <= gifts.length; i++)
    acc.push([])

  const backtracking = (start: number, current: Array<string>) => {
    acc[current.length].push([...current])
    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i])
      backtracking(i + 1, current)
      current.pop()
    }
  }

  backtracking(0, [])

  const response: Array<Array<string>> = []

  for (let i = 1; i < acc.length; i++) 
    response.push(...acc[i])

  return response
}


console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
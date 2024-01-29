function maxDistance(movements: string): number {
  let right = 0
  let left = 0
  let wilcard = 0

  const RIGHT_MOVE = '>'
  const LEFT_MOVE = '<'
  const WILCARD_MOVE = '*'

  for (const move of movements.split('')) {
    switch (move) {
      case RIGHT_MOVE:
        right++
        break

      case LEFT_MOVE:
        left++
        break

      case WILCARD_MOVE:
        wilcard++
        break
    }
  }

  const majorMovement = Math.abs(right - left)
  return majorMovement + wilcard
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
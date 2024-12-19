function removeSnow(s: string): string {
  if (s.length < 2) return s

  const wordsStack: Array<string> = []
  let counter: number = 1
  wordsStack.push(s[0])
  while (counter < s.length) {
    if (wordsStack[wordsStack.length - 1] !== s[counter])
      wordsStack.push(s[counter])
    else
      wordsStack.pop()
    counter++
  }
  return wordsStack.join('');
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Remove "dd", resulting in "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Remove "zz", resulting in "z"

console.log(removeSnow('a')) // -> "a"
// No duplicate piles
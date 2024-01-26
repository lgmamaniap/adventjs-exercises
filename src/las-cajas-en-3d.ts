function drawGift(size: number, symbol: string) {
  let bgSize = size - 2

  bgSize += +!(bgSize + 1)

  let response = ""

  let topCenter = ""
  let bottomCenter = ""

  for (const a of [...Array.from({ length: bgSize }).keys()]) {
    const c = "#"
      + symbol.repeat(bgSize)
      + "#" + symbol.repeat(a) + "#"
    bottomCenter = c + "\n" + bottomCenter
    topCenter += " ".repeat(bgSize - a) + c + "\n"
  }

  response = " ".repeat(size - 1) + "#".repeat(size) + "\n"
    + (topCenter
      + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
      + bottomCenter
      + "#".repeat(size) + "\n").repeat(+!!(size - 1))

  return response
}

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

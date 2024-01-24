function cyberReindeer(road: string, time: number) {
    let roadStructure = road.replace('S', '.').split('')
    let sledPosition: number = 0
    const UNLOCK_TIME = 5
    const OPEN = '*'
    const CLOSE = '|'

    let unlocked = false

    const respuesta = [road]

    for (let i=1; i<time; i++) {
      if (i === UNLOCK_TIME && !unlocked) {
        roadStructure = roadStructure.map((character) => {
          return character === CLOSE ? OPEN : character
        })
        unlocked = true
      }

      const roadStructureCopy = [...roadStructure]
      
      if (roadStructure[sledPosition + 1] === CLOSE) {
        roadStructureCopy[sledPosition] = 'S'
        respuesta.push(roadStructureCopy.join(''))
        continue
      }

      roadStructureCopy[sledPosition + 1] = 'S'
      respuesta.push(roadStructureCopy.join(''))

      sledPosition++

    }
    return respuesta
}


const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
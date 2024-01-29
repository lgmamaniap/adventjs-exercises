function adjustLights(lights: Array<string>) {
  // Code here
  const colors = ['🟢', '🔴']
  const colorsSize: number = 2
  let firstSecuence: number = 0
  let seccondSecuence: number = 0

  lights.forEach((item: string, index: number) => {
    if (item !== colors[index % colorsSize]) {
      firstSecuence++
    } else {
      seccondSecuence++
    }
  })
  return Math.min(firstSecuence, seccondSecuence)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)
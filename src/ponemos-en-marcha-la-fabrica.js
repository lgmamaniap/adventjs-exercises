function manufacture(gifts, materials) {
  // Code here
  const materialsSet = new Set(materials.split(''))
  const respuesta = []
  gifts.forEach((gift) => {
    let valido = true
    for (const character of gift.split('')) {
      if (!materialsSet.has(character)) {
        valido = false
        break
      }
    }
    if (valido) {
      respuesta.push(gift)
    }
  })
  return respuesta
}

// Test de prueba

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []

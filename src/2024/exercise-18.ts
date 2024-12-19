type ItemResponse = { phone: string, name: string, address: string}

function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/g;
  const nameRegex = /<([^>]+)>/g;

  const phones = agenda.match(phoneRegex)

  const noPhones = agenda.replace(phoneRegex, '')

  const names = [...noPhones.matchAll(nameRegex)].map((match) => match[1])

  const noNames = noPhones.replace(nameRegex, '').split('\n')

  if (!phones) return null

  if (!names) return null

  let counter: number = 0
  let childIndex: number = 0

  for (let i = 0; i < phones.length; i++) {
    if (phones[i].includes(phone)) {
      counter++
      childIndex = i
    }

    if (counter > 1) return null
  }

  if (counter === 0) return null

  return {
    name: names[childIndex],
    address: noNames[childIndex].trim()
  }
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null
// Explanation: No results

console.log(findInAgenda(agenda, "1"));
// null
// Explanation: Too many results

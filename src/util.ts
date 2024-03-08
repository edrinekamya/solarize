export function camelToKebab(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
export function validateNumeric(event: KeyboardEvent) {
  const keyCode = event.keyCode
  if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
    // keyCode 48-57 represents 0-9, and 8 is for backspace
    event.preventDefault()
  }
}

export function validateCardNumber(number: string) {
  let nCheck = 0
  let bEven = false
  for (let n = number.length - 1; n >= 0; n--) {
    const cDigit = number.charAt(n)
    let nDigit = parseInt(cDigit, 10)
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9
    }
    nCheck += nDigit
    bEven = !bEven
  }
  return nCheck % 10 === 0
}

export function generateId() {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

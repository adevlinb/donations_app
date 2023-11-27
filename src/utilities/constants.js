

export function formatPhoneNumber(number) {
    return `${number.length > 0 ? "(" : ""}${number.slice(0,3)}${number.length > 3 ? ") " : ""}${number.slice(3,6)}${number.length >= 7 ? "-" : ""}${number.slice(6,10)}`
}
export const generateId = () => {
    let letters = []
    let numbers = []
    for (let i = 0; i < 2; i++) {
        letters.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    for (let i = 0; i < 4; i++) {
        numbers.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    }
    const mixedAll = [...letters, ...numbers].join('')
    return mixedAll
}
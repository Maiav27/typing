export const getWord = (array) =>{
    const index = Math.floor(Math.random() * array.length)
    const word = array[index]
    return word.toLowerCase()
}
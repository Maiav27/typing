export const getWord = (array) =>{
    const index = Math.floor(Math.random() * array.length)
    const word = array[index]
    return word.toLowerCase()
}

export const isValidKey = (key, word) =>{
    if(!word){
        return false
    }

    const result = word.split('').includes(key)
    return result
}
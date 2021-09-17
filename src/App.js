
import {useState, useEffect} from 'react'
import wordList from './resource/words.json'
import { getWord, isValidKey } from './resource/func'
import Word from './Word'

const MAX_TYPED_KEYS = 30
function App() {

  const [typedKeys, setTypedKeys] = useState([])
  const [word, setWord] = useState('')
  const [completedWords, setCompletedWords] = useState([])
  const [validKeys, setValidKeys] = useState([])
    useEffect(() =>{
       setWord(getWord(wordList))
    
    }, [])

    useEffect(()=>{
       const wordFromValidKeys =  validKeys.join('').toLowerCase()
       if(word && word === wordFromValidKeys){
          //adicionar word ao completedWords
          //limpar o array validKeys
          //bucar uma nova palavra
          let newWord = null
          do{
              newWord = getWord(wordList)  
          }while(completedWords.includes(newWord))
          
          setWord(newWord)
          setValidKeys([]);
          setCompletedWords((prev) => [...prev, word])
       }
    }, [word, validKeys])


    const handleKeyDown = (event) =>{
        event.preventDefault()
        const {key} = event

        setTypedKeys((preventTypedKeys) =>{
        
        return [...preventTypedKeys, key].slice((MAX_TYPED_KEYS) * -1)
        } ) //vou deixar essa como aprendizado
        // setTYpedKeys([...typedKeys, key]) // porém prefiro essa 
        if(isValidKey(key, word)){
        setValidKeys((prev) =>{
          const isValidLength = prev.length <= word.length
          const isNextChar = isValidLength && word[prev.length ] === key; // word[prev.length] vai trazer a key que aidna não foi adicionada
          
          return (isNextChar) ? [...prev, key] : prev
        })
        }

  }


  
  return (
    <div className="container" tabIndex='0' onKeyDown={handleKeyDown}>
       <div className='valid-keys'>
          <Word word={word} validKeys={validKeys}/>
       </div>
       <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
       <div className="completed-words">
         
          
           <ol>
       
            { completedWords.length > 0 ? completedWords.map((word)=> <li key={word}>{word}</li>) : null}
           </ol>
           
         
       </div>
    </div>
  );
}

export default App;

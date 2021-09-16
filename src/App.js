
import {useState, useEffect} from 'react'
import wordList from './resource/words.json'
import { getWord } from './resource/func'
import Word from './Word'

const MAX_TYPED_KEYS = 30
function App() {

  const [typedKeys, setTypedKeys] = useState([])
  const [word, setWord] = useState('')
  const [validKeys, setValidKeys] = useState([])
    useEffect(() =>{
       setWord(getWord(wordList))
    }, [])
  const handleKeyDown = (event) =>{
    event.preventDefault()
    const {key} = event

    setTypedKeys((preventTypedKeys) =>{
     
     return [...preventTypedKeys, key].slice((MAX_TYPED_KEYS) * -1)
    } ) //vou deixar essa como aprendizado
    // setTYpedKeys([...typedKeys, key]) // porém prefiro essa 

  }


  
  return (
    <div className="container" tabIndex='0' onKeyDown={handleKeyDown}>
       <div className='valid-keys'>
          <Word word={word} validKeys={validKeys}/>
       </div>
       <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
       <div className="completed-words">
          <ol>
            <li>
            cidade
            </li>
            <li>rua</li>
          </ol>
       </div>
    </div>
  );
}

export default App;

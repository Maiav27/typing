
import {useState} from 'react'
function App() {
  const [typedKeys, setTypedKeys] = useState([])
  const handleKeyDown = (event) =>{
    event.preventDefault()
    const {key} = event
    setTypedKeys((preventTypedKeys) => [...preventTypedKeys, key]) //vou deixar essa como aprendizado
    // setTYpedKeys([...typedKeys, key]) // porém prefiro essa 

  }
  console.log('oi')
  return (
    <div className="container" tabIndex='0' onKeyDown={handleKeyDown}>
       <div className='valid-keys'>
          <span className="matched">emer</span>
          <span className="remainder">son</span>
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

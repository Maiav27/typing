

function App() {

  const handleKeyDown = (event) =>{
    event.preventDefault()
    const {key} = event
    console.log('key', key)

  }
  console.log('oi')
  return (
    <div className="container" tabIndex='0' onKeyDown={handleKeyDown}>
       <div className='valid-keys'>
          <span className="matched">emer</span>
          <span className="remainder">son</span>
       </div>
       <div className="typed-keys">dfsfsds</div>
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

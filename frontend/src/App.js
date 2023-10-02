import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [answer, setAnswer] = useState('')

  useEffect(() => {
    fetch('/test_chat')
    .then((res) => res.json())
    .then((data) => setAnswer(data))
  }, [])

  console.log('hello', answer)
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

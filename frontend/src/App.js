import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/userSlice';
import { updateSettings } from './redux/settingsSlice';
import Card from './components/Card';
import testImg from "./images/testImage.jpg";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  // Temporary "test" user for development; delete when auth is set up
  useEffect(() => {
    const testUser = {
      username: "UnoriginalTestUsername",
      nativeLanguage: "French",
      learningLanguage: "English"
    };

    const testSettings = {
      fontColor: null,
      fontSize: null,
      fontFamily: null,
      fontSpacing: null,
      isAutoPlayTTS: false
    };

    dispatch(updateUser(testUser));
    dispatch(updateSettings(testSettings));
  }, []);

  const testCardData = {
    imageURL: testImg,
    nativeLanguageText: "cobaye",
    targetLanguageText: "guinea pig"
  };


  return (
    <Card cardData={testCardData} />
  )



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

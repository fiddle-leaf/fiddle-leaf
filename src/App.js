import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [aboutMe, setAboutMe] = useState(false);

  return (
    <div className="App">
      < Header aboutMe={aboutMe} setAboutMe={setAboutMe}/>
      < Main aboutMe={aboutMe} />
      < Footer />
    </div>
  );
}

export default App;

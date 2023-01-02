import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [key, setKey] = useState('')
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      playSound(e.key.toUpperCase())
    })
  }, [])
  const arr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 98,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  function playSound(selector) {
    const sound = document.getElementById(selector)
    console.log(sound)
    sound.play();
    setKey(selector)
  }
  return (
    <div className="App">
      <h1>{`You just press the "${key}" key on the keybored`}</h1>
      <div id='drum-machine'>
        <div id='display'>
          {arr.map(text =>
            <div 
              key={text.src} 
              onClick={() => { 
                playSound(text.text)
              }}
              className='drum-pad'
              id={text.src}
            >
              {text.text}
              <audio
                className='clip'
                id={text.text}
                src={text.src}
              ></audio>
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;

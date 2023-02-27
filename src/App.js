import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStart(Date.now() - (now - start));
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(function() {
      setNow(Date.now())
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (start !== null && now !== null) {
    secondsPassed = (now - start) / 1000;
  }



  return (
    <div className="App">
      <h1>{secondsPassed} seconds passed</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

// function App() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }


//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </div>
//   )
// }

export default App;

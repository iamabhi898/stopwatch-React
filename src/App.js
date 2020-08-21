import React, { useState } from 'react';
import Clock from './components/Clock';
import Buttons from './components/Button';

function App() {

  const [status, setStatus] = useState('stopped');

  const start = () => {
    setStatus('started');
  };

  const stop = () => {
    setStatus('stopped');
  };

  const reset = () => {
    setStatus('reset');
  }

  return (
    <div className="App">
      <Clock getStatus={status} />
      <Buttons handleClick1={start} handleClick2={stop} handleClick3={reset} />
    </div>
  );
}

export default App;

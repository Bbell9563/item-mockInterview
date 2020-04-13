import React from 'react';
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <div style={style.window}>
      <Home />
    </div>
  );
}
const style = {
  window: {
    margin: '0px',
  },
}

export default App;

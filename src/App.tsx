import React from 'react';
import data from "../src/datajson/colour.json"
import './App.css';
import ColourInput from './component/colorInput';

function App() {
  return (
    <div className="App">
      <ColourInput data={data} />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router';
import starterColors from './starterColors';
import ColorList from './ColorList';
import ColorForm from './ColorForm';
import ColorFilter from './ColorFilter';

function App() {

  const [colors, setColors] = useState(starterColors);

  const addColor = (name, url, color) =>{
    setColors(colors => [{name, url, color}, ...colors,])
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/colors' element={<ColorList colors={colors}/>}/>
        <Route path='/colors/new' element={<ColorForm addColor={addColor}/>} />
        <Route path='/colors/:color' element={<ColorFilter colors={colors}/>} />
        <Route path='*' element={<Navigate to={'/colors'} />}/>
      </Routes>
    </div>
  );
}

export default App;

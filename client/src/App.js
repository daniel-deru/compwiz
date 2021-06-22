// global imports
import { useRef, useEffect } from 'react';


import './App.css';

//Components
import Header from "./components/jsx/Header"
import Instructions from './components/jsx/Instructions';
import MainWindow from './components/jsx/MainWindow/MainWindow';


//use grid to fix layout problems

function App() {
  
  const appref = useRef(null)
  return (
    <div ref={appref} className="App">
      <Header/>
      <MainWindow/>
      <Instructions/>
    </div>
  )
}

export default App;

// global imports
import { useRef, useEffect } from 'react';


import './App.css';

//Components
import Header from "./components/jsx/Header"
import SideBar from './components/jsx/SideBar';

function App() {
  
  const appref = useRef(null)


  
  
  
  return (
    <div ref={appref} className="App">
      <Header/>
      <SideBar/>
    </div>
  )
}

export default App;

// global imports
import { useRef, useEffect } from 'react';

// front end routing
import { BrowserRouter, Switch, Route } from "react-router-dom"


import './App.css';

//Components
import UserWindow from './components/jsx/UserWindow'
import SignUp from './components/jsx/SignUp';
import SignIn from './components/jsx/SignIn';



//use grid to fix layout problems

function App() {
  
  return (
    <div  className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={UserWindow} />
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App;

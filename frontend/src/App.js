import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sign_in from './Components/Sign_in';
import Sign_up from './Components/Sign_up';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Landing from './Components/Landing';
import News from './Components/News';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing}/> 
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//components
import Header from '../Header/Header';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive'
import PageSix from '../PageSix/PageSix'
import Home from '../Home/Home';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/pageOne'>
          <PageOne />
        </Route>
        <Route exact path='/pageTwo'>
          <PageTwo />
        </Route>
        <Route exact path='/pageThree'>
          <PageThree />
        </Route>
        <Route exact path='/pageFour'>
          <PageFour />
        </Route>
        <Route exact path='/pageFive'>
          <PageFive />
        </Route >
        <Route exact path='/thankyou'>
          <PageSix />
        </Route>
        
      </Router>
    </div>
  );
}

export default App;

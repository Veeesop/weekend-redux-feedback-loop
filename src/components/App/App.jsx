import React from 'react';
import axios from 'axios';

//components
import Header from '../Header/Header';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive'
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom'
import Main from './Main/Main'
import './App.css';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer.jsx';

import AboutMe from './AboutMe/AboutMe';


function App() {
  return (<>
    <Header />
    <Main />

    <Footer />
  </>
  );
}

export default App;

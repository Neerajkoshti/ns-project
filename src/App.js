import React from 'react';
import './App.css';
import './style/NavStyle.css'
import "./style/Headsection.css"
import "./style/Slideshow.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Navbar} from './components/Navbar'
import { Headsection } from './components/Headsection';
import { Slideshow } from './components/Slideshow';

function App() {
  return (
    <>
  <Navbar/>
  <Headsection/>
  <Slideshow/>
  </>
  );
}

export default App;

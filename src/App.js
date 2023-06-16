import React  from 'react';
import Nav from './components/Header/Nav';
import Banner from './components/Banner/Banners';
import {originals,action} from './urls'
import './App.css';
import Rowpost from './components/Rowpost/Rowposts';


function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;

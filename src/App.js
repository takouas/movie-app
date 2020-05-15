import React from 'react';
import Cardlist from './listemoves/card-list';
import Description from './listemoves/description'
import Favoris from './listemoves/listFavoris'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div >
      <center className='navbar-style' >
        <h2 className='title-navbar'>movie </h2>

      </center>

      <BrowserRouter>

        <Route exact path='/' component={Cardlist} />

        <Route path='/description' component={() => <Description />} />

      </BrowserRouter>

    </div>

  );
}

export default App;






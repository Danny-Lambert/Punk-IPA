import './App.css';
import React, { useEffect, useState } from 'react';
import SideBar from "./containers/SideBar/SideBar"
import Dashboard from "./containers/Dashboard";

const App = (props) => {

  const [beers, setBeers] = useState([]); 
  const [searchtext, setSearchText] = useState("");

  const getBeers = (props) => {
    fetch ("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((response) => setBeers(response));
  };

  useEffect (() => {
    getBeers (props);
  });

  return (
    <div className="App">
        <h1>Search for your favourite Beer below!</h1> 
        <>
        <SideBar/>
        <Dashboard beers={beers}/>
        </>     
    </div>
  );
}

export default App;

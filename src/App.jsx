import './App.css';
import React, { useEffect, useState } from 'react';
import SideBar from "./containers/SideBar/SideBar"
import Dashboard from "./containers/Dashboard";
import SearchBar from './components/SearchBar';

const App = (props) => {

  const [allBeers, setAllBeers] = useState();
  const [beers, setBeers] = useState([]); 
  // const [searchtext, setSearchText] = useState("");

  const getBeers = (props) => {
    fetch ("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((response) => setBeers(response));
  };

  useEffect (() => {
    getBeers (props);
  });

  const searchFilter = (searchValue) => {
    const searchBeers = allBeers;

    const searchFilteredList = searchBeers.filter((beer) => {
      const beerAndNameArray = beer.concat([
        beer.name.toLowerCase(),
      ]);
      const beerAndNameString = beerAndNameArray.join(" ");
      return beerAndNameString.includes(searchValue.toLowerCase());
    });

  }
  return (
    <div className="App">
        <h1>Search for your favourite Beer below!</h1> 
        <>
        <SearchBar
          placeholder="Search for your favourite beer!"
          searchFilter={searchFilter} 
          />
        <Dashboard beers={beers}/>
        </>     
    </div>
  );

};

export default App;

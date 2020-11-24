import Footer from "./components/Footer";
import Header from "./components/Header";
//import Notes from "./components/Notes";
import ResultTable from "./components/ResultTable";
import { useState,useEffect } from "react";

import SearchField from "react-search-field";

import './App.css';






function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const [showtbl, setshowtbl] = useState(false);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://starlord.hackerearth.com/TopRamen")
      .then(res => res.json())
      .then(
        (restaurants) => {
          setIsLoaded(true);
          setItems(restaurants);
          console.log()
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const [searchText,setText]=useState("");

  function handleKeyUp(value,e){
    setText(value);
    if(showtbl){
      filterResult(value);
    }
  }

  function filterResult(value){
    if(value===""){
      setResult(restaurants);
    }else{
      setResult(restaurants.filter(e=> e.Brand.toLowerCase().includes(value.toLowerCase())));
    }
  }

  function searchClicked(value){
    setshowtbl(true);
    filterResult(value);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="well alert alert-info infomsg">
          Note : Please search using <strong>brand name</strong>.
      </div>
      <SearchField onChange={handleKeyUp}  onSearchClick={searchClicked} value={searchText} classNames="searchbar"/>
      {showtbl && <ResultTable result={result} error={error} isLoaded={isLoaded} searchText={searchText}></ResultTable>}



      {/* <div className="card-columns">
        {restaurants.map( 
          (restaurants,index) =>
            <Notes key={index} Brand={restaurants.Brand} Variety={restaurants.Variety} Style={restaurants.Style} Country={restaurants.Country} Stars={restaurants.Stars} TopTen={restaurants['Top Ten']}></Notes>
          )}
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

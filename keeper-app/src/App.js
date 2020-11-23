import Footer from "./components/Footer";
import Header from "./components/Header";
//import Notes from "./components/Notes";
import ResultTable from "./components/ResultTable";

import SearchField from "react-search-field";

import './App.css';






function App() {

  function handleKeyUp(e){
    console.log("hi");
  }

  function searchClicked(value){
    console.log("search");
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="well alert alert-info infomsg">
          Note : Please search using <strong>brand name</strong>.
      </div>
      <SearchField onChange={handleKeyUp} onSearchClick={searchClicked} classNames="searchbar"/>
      <ResultTable></ResultTable>



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

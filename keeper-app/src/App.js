import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div class="card-columns">
        <Notes></Notes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

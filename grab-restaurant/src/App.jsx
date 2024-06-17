import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SearchBar from "./SearchBar";
import Cards from "./Cards";



function App() {
  return (
    <div className="App">
      <h1>Grab Restaurant</h1>
      <SearchBar />
      <Cards />
    </div>
  );
}

export default App;

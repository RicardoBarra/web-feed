import React from "react";
import "./App.css";
import Title from "./components/Title";
import Structure from './components/Structure'



function App() {
  return (
    <div className="App">
      <Title content="Welcome to the gifland!" />
      <Structure />
    </div>
  );
}

export default App;

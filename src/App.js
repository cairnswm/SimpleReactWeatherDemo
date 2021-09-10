import './App.css';
import { useState } from "react"
import Header from "./components/header.js"
import Main from "./components/main.js"
import locationContext from './components/locationContext'

function App() {
  const [location, setLocation] = useState("");

  return (
    <locationContext.Provider value={{ location, setLocation }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </locationContext.Provider>
  );
}

export default App;

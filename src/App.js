import './App.css';
import Header from "./components/header.js"
import Main from "./components/main.js"
import LocationProvider from './components/locationContext'

function App() {
  return (
    <LocationProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </LocationProvider>
  );
}

export default App;

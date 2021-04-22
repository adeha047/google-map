import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ub1K8pYBwtmwcF0ddudee3oTjxfNC0I3-w&usqp=CAU" className=" App-logo" alt="Tree" />
        <p>
          Welcome to the application designed to find the closest local park in your area
        </p>
        <a
          className="App-link"
          href="map.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Location
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

const greeting = "Hello!!!"
const className = "blue"

function getColor(isRed) {
  if (isRed) {
    return "red"
  } else {
    return "blue"
  }
}

function App() {
  return (
    <div className="App">
      {/* JSX */}
      <h1 id="header" className={className}>{greeting}{1+1}</h1>
      <h2>{getColor(true)}{getColor(false)}</h2>
    </div>
  );
}

export default App;

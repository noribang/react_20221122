import logo from './logo.svg';
import './App.css';

const greeting = "Hello!!!"

function App() {
  return (
    <div className="App">
      {/* JSX */}
      <h1 id="header" className="blue">{greeting}{1+1}</h1>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
  );
}

export default App;

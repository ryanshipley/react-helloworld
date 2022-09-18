import logo from './logo.svg';
import Header from "./components/Header";
import Player from "./components/Player";
import './App.css';

function App() {
  return (
  <div>
    <Header/>
    <Player whichPlayer='x'/>
    <Player whichPlayer='o'/>
    </div>);
 }

export default App;

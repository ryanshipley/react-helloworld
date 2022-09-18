import logo from './logo.svg';
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import './App.css';
import "./style.css";

function App() {
  return (
  <div>
    <Header/>
    <Player whichPlayer='x'/>
    <Player whichPlayer='o'/>
    <Board/>
    </div>);
 }

export default App;

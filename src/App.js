import './App.css';
import { Routes , Route  } from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./components/Home"
import About from "./components/About";
import Shop from "./components/Blogger";
import Blogger from './components/Blogger';

function App() {
  return (
    <>

    <Nav/>

    <Routes>
    
    <Route path='/'  Component = { Home } />
    <Route path='/about'  component = { About} />
    <Route path='/shop' component = { Shop} />
    <Route path='/blogger' component = { Blogger} />
    
    </Routes>


    </>
  );
}

export default App;

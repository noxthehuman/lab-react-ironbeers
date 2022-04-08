import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={ <> <nav> <Link to='/'> Home </Link> </nav> <Outlet/> </>} >
          
          <Route path="/beers" element={<Beers />} > </Route>
          <Route path="/random-beer" element={<RandomBeer />} > </Route>
          <Route path="/new-beer" element={<NewBeer />}> </Route>
          
          </Route>
  
          <Route path="/" element={<HomePage />} > </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Characters from './pages/Characters';
import Home from './pages/Home';
import Houses from './pages/Houses';
import Locations from './pages/Locations';
import Potions from './pages/Potions';
import Spells from './pages/Spells';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1 className="magical-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px' }}>
            ⚡ Mundo Mágico de Harry Potter ⚡
          </h1>
        </header>
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/potions" element={<Potions />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

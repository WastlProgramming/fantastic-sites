import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info'
import SitesList from './components/Sites';
import TopBackground from './components/TopBackground';

function App() {
  return (
    <div className="App">
      <header>
          <TopBackground />
          <Info />
      </header>
      <main>
          <SitesList />
      </main>
    </div>
  );
}

export default App;

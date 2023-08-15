
import './App.css';

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Reac Router</h1>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

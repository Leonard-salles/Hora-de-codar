
import './App.css';

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchForm  from './pages/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>Reac Router</h1>
      <Navbar />
      <SearchForm />
      <Outlet />
    </div>
  );
}

export default App;

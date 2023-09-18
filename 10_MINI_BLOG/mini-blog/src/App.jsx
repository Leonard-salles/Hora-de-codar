
import './App.css'

import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Footer } from './Components/Footer';

import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from './Context/AuthContext';

//hooks
import { useState, useEffect } from 'react';
import { useAutentication } from './Hooks/useAutentication';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAutentication();

  const loading = user === undefined

  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    });
  }, [auth])

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <>
    <AuthProvider value={user}>
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
    </AuthProvider>
    </>
  );
}

export default App

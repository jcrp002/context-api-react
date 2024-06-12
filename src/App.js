import { useEffect, useState } from 'react';
import './App.css';
import { Context } from './context/Context';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [user, setUser] = useState({});

  useEffect(() =>{
    console.log("useEffect lanzado por primera vez");
    localStorage.getItem("user");
    let user_local = JSON.parse(localStorage.getItem("user"));
    setUser(user_local);
  }, []);
  
  useEffect(() => {
    console.log("este es un cambio de user");
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
        <Context.Provider value={{user, setUser}}>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;


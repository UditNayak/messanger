import './App.css';
import List from './components/List';
import Chat from './components/Chat';
import Detail from './components/Detail';
import Login from './components/Login';
import Notification from './components/Notification';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';

function App() {

  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return () => unSub();
  }, []);


  return (
    <div className="container">
      {user ? (
        <>
        <List />
        <Chat />
        <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;

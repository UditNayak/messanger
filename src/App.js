import './App.css';
import List from './components/List';
import Chat from './components/Chat';
import Detail from './components/Detail';
import Login from './components/Login';

function App() {

  const user = false;
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
    </div>
  );
}

export default App;

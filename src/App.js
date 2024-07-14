import './App.css';
import List from './components/List';
import Chat from './components/Chat';
import Detail from './components/Detail';

function App() {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}

export default App;

import './App.css';
import Hello from './components/Hello';
import Me from './components/Me';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FucntionEvent';
import ClsEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunCount';

function App() {
  return (
    <div className="App">
      <FunctionEvent />
      <ClsEvent />
      <FunctionalCounter />

    </div>
    
  );
}

export default App;

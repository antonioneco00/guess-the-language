import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Quiz/>
    </div>
  );
}

export default App;

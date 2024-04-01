import './App.css';
import FirstFuncomp from './components/FirstFuncomp';

function App() {
  return (
    <div className="App">
        <h1>Hello React</h1>
       <FirstFuncomp mobile="99999999"></FirstFuncomp>
        <input type="text" id="abc"/>
       <FirstFuncomp username="Happy" address="Pune"/>
    </div>
  );
}

export default App

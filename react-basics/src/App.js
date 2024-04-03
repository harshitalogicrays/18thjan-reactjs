import './App.css';
import EventDemo from './components/02day/EventDemo';
import Listrendering from './components/02day/Listrendering';
import Propsdemoinfun from './components/02day/Propsdemoinfun';
import Statedemo from './components/02day/Statedemo';
import FirstFuncomp from './components/FirstFuncomp';

function App() {
  return (
    <div className="App">
        <h1 className='text-primary'>Hello React</h1>
       {/* <FirstFuncomp mobile="99999999"></FirstFuncomp>
        <input type="text" id="abc"/>
       <FirstFuncomp username="Happy" address="Pune"/>

       <Propsdemoinfun empid="101" ename="Smith" salary="400000">
            <h2>props children h2 tag</h2>
            <FirstFuncomp username="Happy" address="Pune"/> 
            <div>div tag</div>
        </Propsdemoinfun>

        <Listrendering/> */}


        {/* <EventDemo/> */}
        <Statedemo/>
    </div>
  );
}

export default App

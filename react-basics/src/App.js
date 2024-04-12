import { useState } from 'react';
import './App.css';
import EventDemo from './components/02day/EventDemo';
import Listrendering from './components/02day/Listrendering';
import Propsdemoinfun from './components/02day/Propsdemoinfun';
import Statedemo from './components/02day/Statedemo';
import Addition from './components/03day/Addition';
import Register from './components/03day/Register';
import Statedemoinfun from './components/03day/Statedemoinfun';
import ConditionalRendering from './components/04day/ConditionalRendering';
import FirstFuncomp from './components/FirstFuncomp';
import ProductRendering from './components/04day/ProductRendering';
import Products from './components/04day/Products';
import FormValidation from './components/05day/FormValidation';
import FormValidationsReactHookForm from './components/05day/FormValidationsReactHookForm';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className='container mt-5'>
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
        {/* <Statedemo/> */}

        {/* <Statedemoinfun address="Pune"/> */}

        {/* <Addition/> */}

        {/* <Register/> */}

        {/* <button
          type="button"
          class="btn btn-primary"
          onClick={()=>setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        
        <ConditionalRendering login={isLoggedIn} username="LRA"/> */}

        {/* <ProductRendering/> */}
        {/* <Products/> */}

        {/* <FormValidation/> */}

        <FormValidationsReactHookForm/>
    </div>
  );
}

export default App

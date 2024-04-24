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
import UseCallbackDemo from './components/06day/UseCallbackDemo';
import RefDemo from './components/07day/RefDemo';
import ParentRef from './components/07day/ParentRef';
import CssinReact1 from './components/07day/CssinReact';
import cssmodule from './App.module.css'
import { MyButton } from './components/07day/MyCssComponents';
import MyOwnButton from './components/08day/MyOwnButton';
import MyOwnTextBox from './components/08day/MyOwnTextBox';
import MyInputGroup from './components/08day/MyInputGroup';
import ClassCompDemo from './components/08day/ClassCompDemo';
import ClassCompDemo1 from './components/09day/ClassCompDemo1';
import Forminclass from './components/09day/Forminclass';
import LifeCycleMethodsDemo from './components/10day/LifeCycleMethodsDemo';
import { Route, Routes } from 'react-router-dom';
import Home from './components/10day/Home';
import { Container } from 'react-bootstrap';
import Pagenotfound from './components/10day/Pagenotfound';
import DefaultLayout from './components/10day/DefaultLayout';

function App() {
  let [isLoggedIn,setIsLoggedIn]=useState(false)
  let [name,setName]=useState("")
  return (
    <>
      <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}></Route>
          <Route path='/products' element={<DefaultLayout><Products/></DefaultLayout>}/>
          <Route path='/reg' element={<Register/>}/>

          <Route path="*" element={<Pagenotfound/>}/>
      </Routes>

    <div className='container mt-5'>
        {/* <h1 className='text-primary'>Hello React</h1>
        <h2 className={cssmodule.error}>Css module demo</h2> */}
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

        {/* <FormValidationsReactHookForm/> */}
        {/* <UseCallbackDemo/> */}

        {/* <RefDemo/> */}

        {/* <ParentRef/> */}

        {/* <CssinReact1/>

        <br/>
        <MyButton>Click 
          App
        </MyButton> */}
{/* 
        <MyOwnButton class1="btn btn-primary me-2" id="btn1" fun={()=>alert("button clicked")}>
          Logout
        </MyOwnButton>

        <MyOwnButton class1="btn btn-danger" disabled type="button" >Copy</MyOwnButton> */}

        {/* <MyOwnTextBox type="text" placeholder="enter name" required
        value={name}
        onChange={(e)=>setName(e.target.value)}></MyOwnTextBox>


        <MyOwnTextBox type="date" ></MyOwnTextBox>

        <MyOwnTextBox type="text" placeholder="enter name" readonly
        value="1234"></MyOwnTextBox> */}


        {/* <MyInputGroup position="append">
          <i className='bi bi-envelope'></i>
        </MyInputGroup>
        <MyInputGroup position="prepend"></MyInputGroup>
        <MyInputGroup position="both"></MyInputGroup>
        <MyInputGroup ></MyInputGroup> */}

        {/* <ClassCompDemo username="Happy" address="Pune"/> */}

        {/* <ClassCompDemo1 username="Happy" address="Pune"></ClassCompDemo1> */}
        {/* <Forminclass/> */}

        {/* <button
          type="button"
          class="btn btn-primary"
          onClick={()=>setIsLoggedIn(!isLoggedIn)}
        >click </button>

        {isLoggedIn &&  <LifeCycleMethodsDemo/>} */}
       
    </div>
    </>

  );
}

export default App

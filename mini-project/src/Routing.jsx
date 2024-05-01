import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import DefaultLayout from "./features/DefaultLayout";

const routerPath = createBrowserRouter([
    {
      path: "/",
      element:<DefaultLayout> <App/></DefaultLayout>,
      children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
      ]
    },
    
    {path:'*',element:<Pagenotfound/>}
  ]);

  export default routerPath
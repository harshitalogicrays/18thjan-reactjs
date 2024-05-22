import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Products from "./features/Products";
import Pagenotfound from "./features/Pagenotfound";
import Cart from "./features/Cart";
import Dashboard from "./features/Admin/Dashboard";
import AdminLayout from "./features/Admin/AdminLayout";
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";

const routerPath = createBrowserRouter([
    {
      path: "/",
      element:<DefaultLayout> <App/></DefaultLayout>,
      children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<Products/>},   
        {path:'cart',element:<Cart/>},   
      ]
    },
    {path:'/admin',element:<AdminLayout></AdminLayout>,
    children :[
      {path:'',element:<Dashboard/>},
      {path:'addcategory',element:<AddCategory/>},
      {path:'viewcategory',element:<ViewCategory/>},
      
    ]
  },
    {path:'*',element:<Pagenotfound/>}
  ]);

  export default routerPath
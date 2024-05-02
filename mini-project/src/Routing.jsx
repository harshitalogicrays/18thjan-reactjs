import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./features/Home";
import Login from "./features/Login";
import Register from "./features/Register";
import Pagenotfound from "./features/Pagenotfound";
import DefaultLayout from "./features/DefaultLayout";
import Products from "./features/Products";
import AdminDashboard from "./features/Admin/AdminDashboard";
import AdminLayout from "./features/Admin/AdminLayout";
import ViewProduct from "./features/Admin/ViewProduct";
import AddProduct from "./features/Admin/AddProduct";

const routerPath = createBrowserRouter([
    {
      path: "/",
      element:<DefaultLayout> <App/></DefaultLayout>,
      children:[
        {path:'',element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>},
        {path:'products',element:<Products/>},   
      ]
    },
    {path:'/admin',element:<AdminLayout></AdminLayout>,
     children:[
     {path:'',element:<AdminDashboard/>},
    {path:'viewproducts',element:<ViewProduct/>},
    {path:'addproduct',element:<AddProduct/>},
      ]
  },
    {path:'*',element:<Pagenotfound/>}
  ]);

  export default routerPath
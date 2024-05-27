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
import AddSlider from "./features/Admin/AddSlider";
import ViewSlider from "./features/Admin/ViewSlider";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";

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
      {path:'editcategory/:id',element:<AddCategory/>},
      {path:'addslider',element:<AddSlider/>},
      {path:'viewslider',element:<ViewSlider/>},
      {path:'editslider/:id',element:<AddSlider/>},
      {path:'addproduct',element:<AddProduct/>},
      {path:'viewproduct',element:<ViewProduct/>},
      {path:'editproduct/:id',element:<AddProduct/>},
    ]
  },
    {path:'*',element:<Pagenotfound/>}
  ]);

  export default routerPath
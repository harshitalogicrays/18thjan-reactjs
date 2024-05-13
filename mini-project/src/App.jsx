
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ContextforCart from "./features/ContextforCart";
function App() {
  return (
    <>
      <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

       <Outlet/>
    </>
  )
}

export default App

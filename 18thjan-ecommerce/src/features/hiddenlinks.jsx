import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/authSlice"
import { FaLock } from "react-icons/fa"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const ShowOnLogin=({children})=>{
   const isLoggedIn  = useSelector(selectIsLoggedIn)
   if(isLoggedIn)return children
   else return null
  }

export const ShowOnLogout=({children})=>{
  const isLoggedIn  = useSelector(selectIsLoggedIn)
  if(!isLoggedIn)return children
  else return null
  }

  export const Logout=(...props)=>{
    const navigate=useNavigate()
    let handleLogout=()=>{
      signOut(auth).then(() => {
        toast.success("loggedOut Successfully")
        navigate('/')
      }).catch((error) => {
       toast.error(error.message)
      }); 
    }
    return(
      <>
      <span onClick={handleLogout} {...props}><FaLock/> Logout</span>
      </>
    )
  }
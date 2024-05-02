export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("logindetails") != null){
        let obj=JSON.parse(sessionStorage.getItem("logindetails"))
        if(obj.isLoggedIn){return children}
        else return null
    }
  }

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("logindetails") == undefined){
            return children
    }
    else return null
  }
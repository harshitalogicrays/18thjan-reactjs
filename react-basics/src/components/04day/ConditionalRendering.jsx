import React from 'react'

const ConditionalRendering = ({login,username}) => {
    console.log(login)
  /*  if(login){
        return (
            <>
                <h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2>
            </>
          )
    }
    else {
        return (
           <><h1>Welcome Guest</h1></>
          )
    }
 */

   /* let result
    if(login){
       result= <><h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2></>
    }
    else {
        result= <><h1>Welcome Guest</h1></>
    }

    return (
        <>
            {result}
        </>
    ) */


    return(<>

        {login ?<><h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2></>  
                :<><h1>Welcome Guest</h1></> }

        <p>dfgkdjjgkdjkg</p>
        
        {login && <><h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2></> }

         {(login && username=="Harshita") && <><h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2></> }

      {(login && username=="Harshita") ?            <><h1>Welcome {username}</h1>
                <h2>Ahmedabad Gujrat</h2></>
    :'' }
    </>)
}

export default ConditionalRendering

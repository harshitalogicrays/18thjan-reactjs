import React from 'react'

const MyInputGroup = ({position,children}) => {
    if(position=="append"){
        return (
            <>
              <div className="input-group mb-3">
                     <input className="form-control" />
                    <span className="input-group-text">{children}</span>
            </div>
            </>
          )
    }
    else if(position=="prepend"){
        return (
            <>
              <div className="input-group mb-3">
              <span className="input-group-text">@</span>
                     <input className="form-control" />
                  
            </div>
            </>
          )
    }
    else if(position=="both"){
        return (
            <>
              <div className="input-group mb-3">
              <span className="input-group-text">@</span>
                     <input className="form-control" />
             <span className="input-group-text">@</span>
            </div>
            </>
          )
    }
    else {
        return  <input className="form-control" />
    }
}

export default MyInputGroup

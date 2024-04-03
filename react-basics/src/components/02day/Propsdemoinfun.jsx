import React, { Fragment } from 'react'
const Propsdemoinfun = (emp) => {
    // emp.empid=110 //error Cannot assign  to read only property 'empid' of 
  return (
    <Fragment>
      <h2>{emp.empid}</h2>
         {/* {emp.children} */}
            {/* {emp.children[0]} */}
            {/* {emp.children.length} */}

            {/* {emp.children.map((e,i)=><div>{e}</div>
            )} */}

            {emp.children.map((e,i)=>{
                console.log(e)
                    return <Fragment key={i}>{e}</Fragment>
            }
            )}
    </Fragment>
  )
}

export default Propsdemoinfun

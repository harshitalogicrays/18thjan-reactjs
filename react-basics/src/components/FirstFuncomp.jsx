// function FirstFuncomp(){
//     return (
//         <h1>first fun component</h1>
//     )
// }
// export default FirstFuncomp

// const FirstFuncomp=()=>{
//     return (
//         <div>
//         <h1>first fun component</h1>
//         <h1>fererer</h1>
//         </div>
//     )
// }
// export default FirstFuncomp

//rfce
// import React from 'react'
// function FirstFuncomp() {
//   return (
//     <div>
//       <h1>first fun component</h1>
//     </div>
//   )
// }
// export default FirstFuncomp


//rafc
// import React from 'react'
// const FirstFuncomp = () => {
//   return (
//     <div>
//       <h1>first fun component arrow fun</h1>
//     </div>
//   )
// }
// export default FirstFuncomp



// ==========props======

// import React from 'react'
// const FirstFuncomp = (props) => {
//     console.log(props) //{username:"Happy" address:"Pune"}
//   return (
//     <div>
//       <h1>first fun component arrow fun</h1>
//       <h2>{props.username}</h2>
//       <h2>{props.address}</h2>
//       <h2>{props.mobile}</h2>
//     </div>
//   )
// }
// export default FirstFuncomp

import React from 'react'
const FirstFuncomp = ({username,address,...props}) => {
    // console.log(props) //{username:"Happy" address:"Pune"}
  return (
    <React.Fragment>
      <h1>first fun component arrow fun</h1>
      <h2>{username}</h2>
      <h2>{address}</h2>
      <h2>{props.mobile}</h2>
    </React.Fragment>
  )
}
export default FirstFuncomp
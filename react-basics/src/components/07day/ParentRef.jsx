import React, { useRef } from 'react'
import ChildRef from './ChildRef'
// import Video from '../../assets/video.mp4'
const ParentRef = () => {
    let focusRef=useRef()
    let videoRef=useRef()
  return (

    <>
    {/* <button
    type="button"
    class="btn btn-primary" 
    onClick={()=>focusRef.current.focus()}
 >
    Button
 </button>
 <ChildRef  ref={focusRef}/> */}


<button type="button" className='btn btn-primary me-2' 
    onClick={()=>videoRef.current.play()}
> Play</button>
<button type="button" className='btn btn-primary me-2' 
    onClick={()=>videoRef.current.pause()}
> Pause</button>
<br/>

<ChildRef ref={videoRef}/> {/* forwardRef */}
 </>
  )
}

export default ParentRef

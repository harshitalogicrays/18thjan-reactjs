import React, { forwardRef } from 'react'
import Video from '../../assets/video.mp4'
const ChildRef =forwardRef(
    (props,ref) => {
        return (
          <>
              {/* <div class="mb-3">
                  <label for="" class="form-label">Name</label>
                  <input  type="text"  class="form-control" 
                  ref={ref} />
                       </div>
               */}

        <video style={{width:'300px',height:'200px'}} ref={ref}>
            <source src={Video}></source>
        </video>
          </>
      )
      }
)



export default ChildRef

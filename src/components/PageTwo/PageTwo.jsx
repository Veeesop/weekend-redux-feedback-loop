import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageTwo = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const  [feeling, setFeeling] = useState('')
    function handleSubmit() {
        
        dispatch({
          type: `SET_PAGETWO_DATA`,
          payload: Number(feeling)
        });
      
        history.push('/pageThree');
      }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>How well are you understanding the material?</h2>
                <input type="range" min="1" max="5" onChange={evt => setFeeling(evt.target.value)}/>
                <br />
                <h3>{feeling}</h3>
                <br />
                <button type="submit">Next</button>
            </form>
            
        </div>
    )
}

export default PageTwo
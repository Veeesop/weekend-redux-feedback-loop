
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageOne = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const  [feeling, setFeeling] = useState('')
    function handleSubmit() {
        
        dispatch({
          type: `SET_PAGEONE_DATA`,
          payload: Number(feeling)
        });
      
        history.push('/pageTwo');
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>How Are You Feeling Today</h2>
                <input type="range" min="1" max="5" onChange={evt => setFeeling(evt.target.value)}/>
                <br />
                <h3>{feeling}</h3>
                <button type="submit">Next</button>
            </form>
           
        </div>
    )
}

export default PageOne
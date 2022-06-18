
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageFour = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const  [feeling, setFeeling] = useState('')
    function handleSubmit(evt) {
        evt.preventDefault
        
        dispatch({
          type: `SET_PAGEFOUR_DATA`,
          payload: feeling
        });
      
        history.push('/pageFive');
      }


    return(
        <div>
            <h2>Any comments you would like to leave</h2>
            <form onSubmit={handleSubmit}>
                <input type="text-area" onChange={evt => setFeeling(evt.target.value)}/>
                <br />
                <button type='submit'>Next</button>
            </form>
            
        </div>
    )
}

export default PageFour
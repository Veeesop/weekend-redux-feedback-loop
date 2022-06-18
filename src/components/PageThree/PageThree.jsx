
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'


const PageThree = () => {

    const dispatch = useDispatch()
    const history = useHistory()


    const  [feeling, setFeeling] = useState('')
    function handleSubmit() {
        
        dispatch({
          type: `SET_PAGETHREE_DATA`,
          payload: Number(feeling)
        });
      
        history.push('/pageFour');
      }


    return(
        <div>
            <h2>How well are you being supported</h2>
            <form onSubmit={handleSubmit}>
            <input type="range" min="1" max="5" onChange={evt => setFeeling(evt.target.value)}/>
            <br />
            <button>Next</button>
            </form>
            
        </div>
    )
}

export default PageThree
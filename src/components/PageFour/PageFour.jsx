import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageFour = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    function setComments(comments) {
        dispatch({
          type: `SET_COMMENTS_DATA`,
          payload: comments
        });
      }
    function next(){
        history.push('/pageFive')
    }

    return(
        <div>
            <h2>Any comments you would like to leave</h2>
                <input type="text-area" onChange={evt => setComments(evt.target.value)}/>
                <br />
                <button onClick={next}>Next</button>            
        </div>
    )
}

export default PageFour
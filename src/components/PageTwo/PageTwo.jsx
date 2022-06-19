import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageTwo = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const entry = useSelector(store => store.emotionReducer.understanding)
    function setUnderstanding(understanding) {
        dispatch({
          type: `SET_UNDERSTANDING_DATA`,
          payload: Number(understanding)
        });
      }
    function next(){
        history.push('/pageThree');
    }
    return(
        <div>
                <h2>How well are you understanding the material?</h2>
                <input type="range" min="1" max="5" onChange={evt => setUnderstanding(evt.target.value)}/>
                <br />
                <h3>{entry}</h3>
                <br />
                <button onClick={next}>Next</button>
        </div>
    )
}

export default PageTwo
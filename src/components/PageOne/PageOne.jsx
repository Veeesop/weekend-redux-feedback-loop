import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'

const PageOne = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const entry = useSelector(store => store.emotionReducer.feeling)
    function setFeeling(feeling) {
        dispatch({
          type: `SET_FEELING_DATA`,
          payload: Number(feeling)
        });
      }
    function next(){
        history.push('/pageTwo');
    }
    return(
        <div>
                <h2>How Are You Feeling Today</h2>
                <input type="range" min="1" max="5" onChange={evt => setFeeling(evt.target.value)}/>
                <br />
                <h3>{entry}</h3>
                <br />
                <button onClick={next}>Next</button>
        </div>
    )
}

export default PageOne
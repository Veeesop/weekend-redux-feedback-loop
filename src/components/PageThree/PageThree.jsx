
import { useDispatch, useSelector} from "react-redux"
import { useHistory } from 'react-router-dom'

const PageThree = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const entry = useSelector(store => store.emotionReducer.support)
    function setSupport(support) {
        dispatch({
          type: `SET_SUPPORT_DATA`,
          payload: Number(support)
        });
      }
    function next(){
      history.push('/pageFour');
    }

    return(
        <div>
            <h2>How well are you being supported</h2>
            <input type="range" min="1" max="5" onChange={evt => setSupport(evt.target.value)}/>
            <br />
            <h3>{entry}</h3>
            <br />
            <button onClick={next}>Next</button>
        </div>
    )
}

export default PageThree
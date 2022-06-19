import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom"

const PageFive = () => {
    const feedback = useSelector(store => store.emotionReducer)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () =>{
        const submitFeedback = {
            feeling: feedback.feeling,
            understanding: feedback.understanding,
            support: feedback.support,
            comments: feedback.comments
        }
        console.log(feedback)
        axios.post('/feedback', submitFeedback).then(()=>{
           dispatch({
            type: "RESET_EMOTIONS",
            payload: { feeling: 1, understanding: 1, support: 1, comments: "" }
           })
           next()
        }).catch(err => {
            console.log('error in post', err)
        })
    }
    function next() {
        history.push('/thankyou')
    }
    return(
        <div>
            <h2>Your Feelings are Valid</h2>
            <ul>
                <li>Feelings: {feedback.feeling}</li>
                <li>Material: {feedback.understanding}</li>
                <li>Supported: {feedback.support}</li>
                <li>Comments: {feedback.comments}</li>
            </ul>

            
            <button onClick={handleClick}>Submit Feedback</button>
            
            
        </div>
    )
}

export default PageFive
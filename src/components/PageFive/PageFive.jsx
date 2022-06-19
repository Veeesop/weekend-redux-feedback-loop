import { useSelector, useDispatch } from "react-redux"
import axios from "axios"


const PageFive = () => {
    const feedback = useSelector(store => store.emotionReducer)

    const dispatch = useDispatch()
    const handleClick =(feedback)=>{
        // const feedback = {
        //     feeling: emotions.pageOne,
        //     understanding: emotions.pageTwo,
        //     support: emotions.pageThree,
        //     comments: emotions.pageFour
        // }
        axios.post('/feedback', feedback).then(()=>{
        //    dispatch({
        //     type: "RESET_EMOTIONS",
        //     payload: { pageOne: 1, pageTwo: 1, pageThree: 1, pageFour: "" }
        //    })
        }).catch(err => {
            console.log('error in post', err)
        })
    }



    return(
        <div>
            <h2>Your Feelings are Valid</h2>
            <ul>
                <li>Feelings: {feedback.pageOne}</li>
                <li>Material: {feedback.pageTwo}</li>
                <li>Supported: {feedback.pageThree}</li>
                <li>Comments: {feedback.pageFour}</li>
            </ul>

            
            <button onClick={handleClick}>Submit Feedback</button>
            
            
        </div>
    )
}

export default PageFive
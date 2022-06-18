import { useSelector } from "react-redux"


const PageFive = () => {
    const emotions = useSelector(store => store.emotionReducer)
    console.log(emotions)

    


    return(
        <div>
            <h2>Thank You!</h2>
            <ul>
                <li>Feelings: {emotions.pageOne}</li>
                <li>Material: {emotions.pageTwo}</li>
                <li>Supported: {emotions.pageThree}</li>
                <li>Comments: {emotions.pageFour}</li>
            </ul>
            
            <button>Leave new Feedback</button>
            
            
        </div>
    )
}

export default PageFive
 import { useHistory } from "react-router-dom"
 
const Home = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/pageOne')
    }

    return (
        <div>
            <h2>Tell us how you're feeling</h2>
            <br />
            <button onClick={handleClick}>Next</button>
        </div>
    )
 }

 export default Home 
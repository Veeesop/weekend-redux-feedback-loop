import { useHistory } from "react-router-dom"

const PageSix = () => {
    const history = useHistory()
    function home() {
        history.push('/')
    }
    return (
        <div>
            <h2>Thank You!</h2>
            <button onClick={home}>Add more FeedbacK</button>
        </div>
    )
}

export default PageSix;
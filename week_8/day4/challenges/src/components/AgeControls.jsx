import { useDispatch } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../features/age/userAgeThunk'

const AgeControls = () => {
    let dispatch = useDispatch()
    const clickAgeUp = (event) => {
        event.preventDefault()
        dispatch(ageUpAsync())
    }
    const clickAgeDown = (event) => {
        event.preventDefault()  
        dispatch(ageDownAsync())
    }
    return (
        <>
            <button onClick={clickAgeUp}>Age Up</button>
            <button onClick={clickAgeDown}>Age Down</button>
        </>
    )
}
export default AgeControls
import { useDispatch } from 'react-redux'
import { logoutUser } from '../features/userData/userDataThunk'


export default function LogoutBtn() {
    let dispatch = useDispatch()
    const clickLogout = (event) => {
        dispatch(logoutUser())
    }
    return (
        <>
            <button onClick={clickLogout}>logout</button>
        </>
    )
}
import { useSelector } from 'react-redux'
import UserHome from '../components/UserHome'
import AdminHome from '../components/AdminHome'


export default function Home() {
    const { user } = useSelector(state => state.userData)
    return (
        <>
            {user.role === 'admin' ? <AdminHome /> : <UserHome />}
        </>
    )
}
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/userData/userDataThunk'
const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '' })
    let dispatch = useDispatch()
    const userData = useSelector(state => state.userData)
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!user.username || !user.email || !user.password) return
        dispatch(registerUser(user))
    }
    return (
        <>
            <h1>register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name='username' onChange={handleChange} value={user.username} />
                <input type="text" placeholder="email" name='email' onChange={handleChange} value={user.email} />
                <input type="password" placeholder="password" name='password' onChange={handleChange} value={user.password} />
                <button>register</button>
                {userData.message && <p>message : {userData.message}</p>}
            </form>
        </>
    )
}

export default Register
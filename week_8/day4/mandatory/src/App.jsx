import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './features/userData/userDataSlice'
function App() {
  const [user, setUser] = useState({ email: '', password: '' })
  let dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const clickLogin = (event) => {
    event.preventDefault()
    dispatch(loginUser(user))
  }
  return (
    <>
      <div>
        <form onSubmit={clickLogin}>
          <input type="text" placeholder="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user?.email} />
          <input type="password" placeholder="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user?.password} />
          <button>login</button>
        </form>
        {userData.user.username && <p>user : {userData.user.username}</p>}
        {userData.error && <p>error : {userData.error}</p>}
      </div>
    </>
  )
}

export default App

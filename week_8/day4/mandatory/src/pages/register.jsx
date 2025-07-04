import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/userData/userDataThunk'

const Register = () => {
    // État local pour stocker les informations de l'utilisateur
    const [user, setUser] = useState({ username: '', email: '', password: '' })

    // Initialisation du dispatch Redux
    let dispatch = useDispatch()

    // Récupération des données utilisateur depuis le store Redux
    const userData = useSelector(state => state.userData)

    // Gère les changements dans les champs du formulaire
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    // Gère la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault()
        // Vérifie que tous les champs sont remplis
        if (!user.username || !user.email || !user.password) return
        // Envoie les données au store Redux via le thunk
        dispatch(registerUser(user))
    }

    return (
        <>
            <h1>register</h1>
            <form onSubmit={handleSubmit}>
                {/* Champ pour le nom d'utilisateur */}
                <input
                    type="text"
                    placeholder="username"
                    name='username'
                    onChange={handleChange}
                    value={user.username}
                />
                {/* Champ pour l'email */}
                <input
                    type="text"
                    placeholder="email"
                    name='email'
                    onChange={handleChange}
                    value={user.email}
                />
                {/* Champ pour le mot de passe */}
                <input
                    type="password"
                    placeholder="password"
                    name='password'
                    onChange={handleChange}
                    value={user.password}
                />
                {/* Bouton de soumission */}
                <button>register</button>
                {/* Affiche un message si présent dans le store */}
                {userData.message && <p>message : {userData.message}</p>}
            </form>
        </>
    )
}

export default Register
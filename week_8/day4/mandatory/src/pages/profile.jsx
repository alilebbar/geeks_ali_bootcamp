import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/userData/userDataThunk";
import { useState } from "react";

// Composant Profile qui reçoit un utilisateur en prop
const Profile = ({ user }) => {
    console.log(user);
    const dispatch = useDispatch();

    // Etat local pour stocker les modifications de l'utilisateur
    const [userToUpdate, setUserToUpdate] = useState(user);

    // Etat pour afficher ou non le formulaire de mise à jour
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <>
            <h1>profile</h1>
            {/* Affichage conditionnel : formulaire de mise à jour ou infos utilisateur */}
            {showUpdate ? (
                <div>
                    <form>
                        {/* Champ pour le nom d'utilisateur */}
                        <input
                            type="text"
                            placeholder="username"
                            onChange={(e) =>
                                setUserToUpdate({ ...userToUpdate, username: e.target.value })
                            }
                            value={userToUpdate?.username}
                        />
                        {/* Champ pour l'email */}
                        <input
                            type="text"
                            placeholder="email"
                            onChange={(e) =>
                                setUserToUpdate({ ...userToUpdate, email: e.target.value })
                            }
                            value={userToUpdate?.email}
                        />
                        {/* Champ pour le mot de passe */}
                        <input
                            type="text"
                            placeholder="password"
                            onChange={(e) =>
                                setUserToUpdate({ ...userToUpdate, password: e.target.value })
                            }
                            value={userToUpdate?.password}
                        />
                    </form>
                </div>
            ) : (
                <div>
                    {/* Affichage des informations de l'utilisateur */}
                    <p>username : {user.username}</p>
                    <p>email : {user.email}</p>
                    <p>role : {user.role}</p>
                </div>
            )}

            {/* Si l'utilisateur existe, afficher les boutons d'action */}
            {user ? (
                <div>
                    {/* Bouton pour valider la mise à jour ou afficher le formulaire */}
                    {showUpdate ? (
                        <button onClick={() => dispatch(updateUser(userToUpdate))}>
                            valider
                        </button>
                    ) : (
                        <button onClick={() => setShowUpdate(!showUpdate)}>update</button>
                    )}
                    {/* Bouton pour supprimer l'utilisateur */}
                    <button
                        onClick={() => {
                            dispatch(deleteUser(user._id));
                            window.location.href = "/";
                        }}
                    >
                        delete
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default Profile;

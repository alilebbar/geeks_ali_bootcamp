"use strict";
const getAction = (role) => {
    let result;
    switch (role) {
        case "admin":
            result = "Gérer les utilisateurs et les paramètres";
            break;
        case "editor":
            result = "Modifier le contenu";
            break;
        case "guest":
            result = "Accès limité";
            break;
        case "viewer":
            result = "Voir le contenu";
            break;
        default:
            result = "Rôle invalide";
            break;
    }
    return result;
};
console.log(getAction("admin"));
console.log(getAction("editor"));
console.log(getAction("guest"));
console.log(getAction("viewer"));
console.log(getAction("unknown"));

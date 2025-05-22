const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

let currentValues = {};
let stories = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les valeurs et les nettoyer
    let nounV = document.getElementById("noun").value.trim();
    let adjectiveV = document.getElementById("adjective").value.trim();
    let personV = document.getElementById("person").value.trim();
    let verbV = document.getElementById("verb").value.trim();
    let placeV = document.getElementById("place").value.trim();

    if (!nounV || !adjectiveV || !personV || !verbV || !placeV) {
        alert("Merci de remplir tous les champs !");
        return;
    }

    // Stocker les valeurs pour le bouton "Mélanger"
    currentValues = { nounV, adjectiveV, personV, verbV, placeV };

    // Définir les différentes versions de l'histoire
    stories = [
        `Un jour, ${personV} a trouvé un ${nounV} très ${adjectiveV} au milieu de ${placeV}. Il a décidé de ${verbV} avec.`,
        `${placeV} était silencieux jusqu’à ce que ${nounV} commence à ${verbV} bruyamment. ${personV} a crié : "C’est tellement ${adjectiveV} !"`,
        `${personV} a apporté son ${nounV} ${adjectiveV} à ${placeV}. Tout le monde a voulu ${verbV} avec, c’était incroyable !`
    ];

    // Afficher une des histoires (au hasard)
    afficherHistoireAleatoire();
});

shuffleBtn.addEventListener("click", function () {
    if (stories.length === 0) {
        alert("Remplis d'abord le formulaire !");
        return;
    }

    afficherHistoireAleatoire();
});

function afficherHistoireAleatoire() {
    const alea = Math.floor(Math.random() * stories.length);
    storySpan.textContent = stories[alea];
}

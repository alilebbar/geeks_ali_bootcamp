const form = document.querySelector("form");
const result1=document.getElementById("result1")
const result2 = document.getElementById("result2")
const apiFetch = (lat, long) => {
    return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
        .then((response) => response.json())
        .then((sunset) => sunset.results.sunset)
        .catch((e) => console.error(e.message));
};

const affiche = (tab=[])=>{
    result1.textContent=tab[0]
    result2.textContent=tab[1]
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataForm = new FormData(form);
    const lat1 = dataForm.get("latitude1");
    const long1 = dataForm.get("longitude1");
    const lat2 = dataForm.get("latitude2");
    const long2 = dataForm.get("longitude2");
    Promise.all([
        apiFetch(lat1, long1),
        apiFetch(lat2, long2)
    ])
    .then((result) => affiche(result))
    .catch((e) => console.error(e));
});
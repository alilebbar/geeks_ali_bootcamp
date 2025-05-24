function ajouterElement(elm = "") {
    let elmOption = document.createElement("option");
    elmOption.value = elm.toLowerCase();
    elmOption.textContent = elm;
    elmOption.selected = true; 
    return elmOption;
}

let genres = document.getElementById("genres");
genres.appendChild(ajouterElement("Classic"));
console.log(genres.value); 

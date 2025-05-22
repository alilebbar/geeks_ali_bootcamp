let form = document.querySelector("form");
let fnameId = document.querySelector("#fname");
let lnameId = document.querySelector("#lname");
let fnameAtr = document.getElementsByName("firstname");
let lnameAtr = document.getElementsByName("lastname");
let submit = document.querySelector("#submit");
let ul = document.querySelector(".usersAnswer");

console.log(form);
console.log(fnameId);
console.log(lnameId);
console.log(fnameAtr);
console.log(lnameAtr);

submit.addEventListener("click", (event) => {
    event.preventDefault(); // empêche le rechargement

    let nameF = fnameId.value.trim();
    let nameL = lnameId.value.trim();

    if (nameF !== "" && nameL !== "") {
        let li1 = document.createElement("li");
        li1.textContent = nameF;

        let li2 = document.createElement("li");
        li2.textContent = nameL;

        ul.appendChild(li1);
        ul.appendChild(li2);
    }
});

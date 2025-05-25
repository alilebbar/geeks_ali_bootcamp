let body = document.querySelector("body")
let email = document.createElement("input")
let form = document.createElement("form")
let submit = document.createElement("button")
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
email.setAttribute("type","email")
email.placeholder="entrer votre emaile valide"
submit.textContent="valider"
form.appendChild(email)
form.appendChild(submit)
body.appendChild(form)

function validateEmail(email) {
    if (!email.includes("@")) return false;

    let parts = email.split("@");
    if (parts.length !== 2) return false;

    let user = parts[0];
    let domain = parts[1];

    if (user.length === 0 || domain.length === 0) return false;
    if (!domain.includes(".")) return false;

    let domainParts = domain.split(".");
    if (domainParts.some(part => part.length === 0)) return false;

    return true;
}


function testRgex(mail){
    return regex.test(mail)
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let val=email.value
    testRgex(val)
    if (validateEmail(val)){
        console.log("Email valide")
    }else {
    console.log("Email invalide");
}


})
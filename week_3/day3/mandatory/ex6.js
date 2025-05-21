const div = document.querySelector("div");
div.setAttribute('id', 'socialNetworkNavigation');

const ul = document.querySelector("ul");


const li = document.createElement('li');


const logoutText = document.createTextNode("Logout");


li.appendChild(logoutText);

ul.appendChild(li);
first = ul.firstElementChild.textContent
last = ul.lastElementChild.textContent
console.log(first)
console.log(last)
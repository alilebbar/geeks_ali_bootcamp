(function (name,imgSrc) {
    let p = document.createElement("p");
    let img = document.createElement("img");
    let div = document.createElement("div");
    img.src = imgSrc;
    p.textContent = `Hello ${name}`;
    div.appendChild(p);
    div.appendChild(img);
    document.body.appendChild(div);

})("ali","https://picsum.photos/200/300");
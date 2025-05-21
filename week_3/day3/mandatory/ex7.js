let allBooks = [
  {
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://booksondemand.ma/cdn/shop/products/1_dc7d5ded-eff3-48dd-b8a9-14ea9d25104d.jpg?v=1668004764&width=823",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  // Créer une div pour chaque livre
  const bookDiv = document.createElement("div");

  // Ajouter titre et auteur
  const text = document.createElement("p");
  text.textContent = `${book.title} écrit par ${book.author}`;

  // Image du livre
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  // Appliquer couleur si déjà lu
  if (book.alreadyRead) {
    text.style.color = "red";
  }

  // Ajouter au DOM
  bookDiv.appendChild(text);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});

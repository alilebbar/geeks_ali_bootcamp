const semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

function createCalendar(year = 2012, month = 9) {
    let date = new Date(year, month - 1, 1); // Premier jour du mois
    let startDay = (date.getDay() + 6) % 7; // Pour que lundi soit le début
    let totalDays = new Date(year, month, 0).getDate(); // Dernier jour du mois

    createView(startDay, totalDays);
}

function createView(startDay, totalDays) {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    // En-tête des jours de la semaine
    for (let i = 0; i < semaine.length; i++) {
        let th = document.createElement("th");
        th.textContent = semaine[i];
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    // Génération des jours
    let row = document.createElement("tr");
    
    // Cellules vides avant le 1er jour
    for (let i = 0; i < startDay; i++) {
        let empty = document.createElement("td");
        row.appendChild(empty);
    }

    for (let day = 1; day <= totalDays; day++) {
        let cell = document.createElement("td");
        cell.textContent = day;
        row.appendChild(cell);

        // Nouvelle ligne chaque dimanche (dimanche devient position 6)
        if ((startDay + day) % 7 === 0) {
            table.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // Ajouter la dernière ligne si elle n'est pas vide
    if (row.children.length > 0) {
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

createCalendar();

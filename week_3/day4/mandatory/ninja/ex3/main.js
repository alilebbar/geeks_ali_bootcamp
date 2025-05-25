document.getElementById("btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("output").textContent = "La géolocalisation n'est pas supportée par ce navigateur.";
  }
});

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById("output").textContent = `Latitude: ${lat}, Longitude: ${lon}`;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("Permission refusée pour la géolocalisation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Position non disponible.");
      break;
    case error.TIMEOUT:
      alert("Temps d'attente dépassé.");
      break;
    default:
      alert("Erreur inconnue.");
  }
}

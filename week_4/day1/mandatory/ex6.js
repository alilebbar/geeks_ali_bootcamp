(function(children, partner, location, job) {
    let message = `Tu seras ${job} à ${location}, marié(e) à ${partner} avec ${children} enfants.`;
    document.body.innerHTML = message;
})(3, "Sophie", "Paris", "Développeur");

function calculerAge() {
    const dateNaissance = new Date(2001, 11, 25); // Mois 0-indexé : 11 = décembre
    const aujourdHui = new Date();

    let age = aujourdHui.getFullYear() - dateNaissance.getFullYear();
    const moisDiff = aujourdHui.getMonth() - dateNaissance.getMonth();
    const jourDiff = aujourdHui.getDate() - dateNaissance.getDate();

    // Vérifie si l'anniversaire de cette année est déjà passé
    if (moisDiff < 0 || (moisDiff === 0 && jourDiff < 0)) {
        age--;
    }

    // Met à jour le contenu de la balise
    const ageElement = document.getElementById("age");
    if (ageElement) {
        ageElement.innerText = age + " ans";
    }
}

// S'assure que ça s'exécute au chargement complet de la page
window.addEventListener("load", calculerAge);



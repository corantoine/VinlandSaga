// Attendez que la page soit entièrement chargée
window.addEventListener('load', () => {
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let boutiquebtn = document.querySelector('.boutique-button');
    let choix = document.querySelector('.search-control');
    let selectedValue = "";

    // Un compteur pour suivre l'index des images
    let counter = 0;

    // Tableau contenant les chemins des images
    const images = ["attachments/1.webp", "attachments/2.webp", "attachments/3.webp"];

    // Attendez 2 secondes, puis activez le "NavBar"
    setTimeout(() => {
        // Obtenez les références des éléments liés à "NavBar"
        const links = document.querySelectorAll("nav li");
        const icons = document.getElementById("icons");
        const nav = document.getElementById("nav");

        // "Toggle" la classe "active" du "NavBar" lorsque les icônes sont cliquées
        icons.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        // Retirez la classe "active" du "NavBar" lorsqu'un lien est cliqué
        links.forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }, 2000);

    // Injecter le contenu de "Header" avec des liens de navigation et des icônes
    document.querySelector('header').innerHTML = `<div  class="nav-container">
        <nav id="nav">
            <h3> <a href="index.html" class="logo">&#9876;</a></h3>
            <ul>
                <li>
                    <a href="about.html">VINLAND SAGA</a>
                </li>
                <li>
                    <a href="boutique.html">BOUTIQUE</a>
                </li>
                <li>
                    <a href="contact.html">CONTACT </a>
                </li>
            </ul>
            <div id="icons"></div>
        </nav>
    </div>`;

    // Injecter le contenu HTML du "Footer" avec le logo Vinland Saga
    document.querySelector('footer').innerHTML = `<footer>
        <img src="attachments/vinland-saga.png" class="vinland" alt="Logo Vinland Saga">
    </footer>`;

    // Écouteur d'événements pour le "choix"
    if(choix && boutiquebtn) {
    choix.addEventListener("change", (e) => {
        selectedValue = e.currentTarget.value;
    })

    boutiquebtn.addEventListener("click", (e) => {
        const selectedCard = document.getElementById(selectedValue);
        selectedCard.classList.add("active")
    })
    }
    // Vérifiez si les éléments next et prev existent avant d'ajouter des écouteurs d'événements
    if (next && prev) {
        // Écouteur d'événements pour le bouton suivant
        next.addEventListener("click", (e) => {
            // Incrémentez le compteur et mettez à jour la source de l'image
            if (counter < images.length - 1) {
                counter++
            } else {
                counter = 0;
            }
            document.getElementById('slider').src = images[counter];
        })

        // Écouteur d'événements pour le bouton précédent
        prev.addEventListener("click", (e) => {
            // Décrémentez le compteur et mettez à jour la source de l'image
            if (counter > 0) {
                counter--
            } else {
                counter = images.length - 1
            }
            document.getElementById('slider').src = images[counter];
        })

    }
});

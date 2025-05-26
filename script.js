// Rendu final JS – Génération d'un site web dynamique à partir d'une API
// 💻📝 Rendu final JS – Génération d'un site web dynamique à partir des données d'une API
// Objectif : utilisation de fetch() pour récupérer des données JSON, manipulation DOM, boucles, gestion d'images et cartes interactives.
// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
// 🔴 Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.
// 🔴🔴 Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
// Ajoute ces témoignages sous les activités dans la page.
// 🔴🔴🔴 Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif.
// 💎 Bonus – Design et personnalisation
// Fonts personnalisées : Ajoute des fonts depuis Google Fonts
// Icônes : Utilise une bibliothèque comme Font Awesome ou Material Icons
// Favicon personnalisé : via balise <link rel="icon" ...>
// Design : styles CSS avec couleurs, espaces, ombres, transitions, animations légères

// ------------------------------PSEUDO CODE-------------------------------
// 🟢 Niveau 1 – Récupérer les données de l'API
// => fetch
// => vérifier avec console.log();
// => créer une fonction : function name(params) {}

// / Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.

fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.
    console.log(data);
    // console.log(Object.key(data));

    // 🟡 Niveau 2 – Affichage du contenu principal
    // Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.

    // ------------------------------PSEUDO CODE----------------------------------
    // => function name(params) {}
    // => dans section createElement("div") dans appendChild section et dans div.appendchild h1,h2,button CTA

    let container = document.getElementById("sectionHeros");
    // Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
    let title = document.createElement("h1");
    let accroche = document.createElement("h2");
    let buttonCTA = document.createElement("button");
    let divHeros = document.createElement("div");

    buttonCTA.classList.add("buttonBody");

    container.classList.add("imgBackground");

    container.appendChild(divHeros);

    divHeros.appendChild(title);
    divHeros.appendChild(accroche);
    divHeros.appendChild(buttonCTA);

    title.textContent = data.nomCommercial;
    accroche.textContent = data.phraseAccroche;

    buttonCTA.textContent = `${data.texteAppelAction}`;
    document
      .querySelector(".buttonBody")
      .addEventListener("click", function () {
        window.location.href = "mailto:hasnakharbouche@gmail.com";
      });

    // 🔴 Niveau 3 – Afficher les activités
    // -------------------------PSEUDO CODE--------------------------------
    // createElement divCard dans appendChild container(section)
    // createElement h3, p, img dans divCard
    // intégrer les data
    // section by id= appendChild

    function services() {
      let sectionCard = document.getElementById("sectionCard");

      let realisation = data.realisations;
      console.log(realisation);

      realisation.forEach((e) => {
        console.log(e);
        console.log(e.titre);
        let divCard = document.createElement("div");
        divCard.classList.add("card");

        sectionCard.appendChild(divCard);

        let image = document.createElement("img");
        let h3 = document.createElement("h3");
        let description = document.createElement("p");
        let buttonCard = document.createElement("button");

        divCard.appendChild(image);
        divCard.appendChild(h3);
        divCard.appendChild(description);
        divCard.appendChild(buttonCard);
        buttonCard.classList.add("buttonBody");

        h3.textContent = e.titre;
        image.src = e["image-url"];
        description.textContent = e.description;
        buttonCard.textContent = "Réserver un chauffeur";
      });
    }

    services();

    // 🔴🔴 Niveau 4 – Afficher les témoignages
    // Pour chaque témoignage dans les données JSON, crée dynamiquement une div contenant le prénom, le commentaire.
    // Ajoute ces témoignages sous les activités dans la page.
    // ----------------------------------PSEUDO CODE------------------------
    // identifier la section dans le js : document.getElementById("section avis")
    // créer élément div dans HTML: document.createElement("div")
    // Placer la div dans la section section.appendChild(div)
    // forEach pour entrer les données de chaque témoignage

    function avisClient() {
      let sectionAvis = document.getElementById("avis");
      let temoignages = data.temoignages;
      console.log(temoignages);

      temoignages.forEach((a) => {
        console.log(a);

        let divAvis = document.createElement("div");
        divAvis.classList.add("cardAvis");
        sectionAvis.appendChild(divAvis);

        let prenom = document.createElement("p");
        let prestation = document.createElement("p");
        let commentaire = document.createElement("p");
        let note = document.createElement("p");

        divAvis.appendChild(prenom);
        divAvis.appendChild(prestation);
        divAvis.appendChild(commentaire);
        divAvis.appendChild(note);

        prenom.textContent = a.prenom;
        prestation.textContent = a.typePrestation;
        commentaire.textContent = a.commentaire;
        note.textContent = a.note + " /5";

        prestation.style.color="#f36765";
        prestation.style.fontSize="22px";
      });
    }
    avisClient();
  });
// ---------------------------CARROUSSEL AVIS----------------------------------------

// -------------------------------------MAP-----------------------------------------

var map = L.map("map").setView([45.188529, 5.724524], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([45.188529, 5.724524]).addTo(map);
marker
  .bindPopup("<b>TroVit</b><br> place Victor Hugo, <br> 38000 Grenoble")
  .openPopup();
// ------------------------------------MENU BURGER-----------------------------------------

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

// Toggle (afficher et retirer) du menu au clic sur le burger
burger.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la fermeture immédiate
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

// Fermer le menu si on clique ailleurs
document.addEventListener("click", (e) => {
  // Si on clique en dehors du menu et du burger
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  }
});

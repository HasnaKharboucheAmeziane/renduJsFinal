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

// 🟢 Niveau 1 – Récupérer les données de l'API
// Utilise fetch() pour récupérer les données JSON depuis l'API https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/.
// Tu as le choix du sujet, donc clique bien sur le sujet de ton choix pour avoir l'URL finale.
// Vérifie si la réponse de l'API est correcte. Si oui, passe les données à une fonction qui affichera le contenu du site.

// ------------------------------PSEUDO CODE-------------------------------
// => fetch
// => vérifier avec console.log();
// => créer une fonction : function name(params) {}

fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/vtc.json"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // console.log(Object.key(data));


// 🟡 Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.

// ------------------------------PSEUDO CODE----------------------------------
// => function name(params) {}
// => dans section createElement("div") dans appendChild section et dans div.appendchild h1,h2,button CTA

let containerHeros = document.getElementById("sectionHeros");

let title = document.createElement("h1");
let accroche = document.createElement("h2");
let buttonCTA = document.createElement("button");
let divHeros= document.createElement("div");

containerHeros.appendChild(divHeros);

divHeros.appendChild(title);
divHeros.appendChild(accroche);
divHeros.appendChild(buttonCTA);

title.textContent=data.nomCommercial;
accroche.textContent=data.phraseAccroche;

buttonCTA.textContent=`${data.texteAppelAction}`;

function services(heros) {
 
}

// 🔴 Niveau 3 – Afficher les activités
// // Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image.
// // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image.

// -------------------------PSEUDO CODE--------------------------------
// createElement divCard dans appendChild container(section) 
// createElement h3, p, img dans divCard
// intégrer les data
// section by id= appendChild

let sectionCard = document.getElementById("card");
let divCard= document.createElement("div");
sectionCard.appendChild(divCard);

let h3= document.createElement("h3");
let description= document.createElement("p");
let image= document.createElement("img");

divCard.appendChild(h3);
divCard.appendChild(description);
divCard.appendChild(image);

let realisation= data.realisations;
console.log(realisation);

realisation.forEach(e => {
    console.log(e);
    console.log(e.titre);
    h3.textContent= e.titre;
description.textContent=e.description;
image.src=e["image-url"];
});






});
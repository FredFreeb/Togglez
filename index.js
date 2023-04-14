// un tableau aléatoire
const fonds = ["first","secondary","third","four"]
// une variable pour éviter que le fond ne se repete à la suite qui parfois généré 2-3 cliques sans effets...
let lastIndex = null;
// Sélectionner le bouton avec jQuery
let bouton = $("#button");

// Définit une fonction fléchée qui change le fond du body aléatoirement
let changerFond = () => {
    console.log('Je suis dans la fonction')

// Sélectionner le body avec jQuery
    let container = $("body");

// Retirer toutes les classes CSS du body
    container.removeClass();


// Générer un nombre aléatoire grâce à chatGpt de bing...
    let indice = Math.floor(Math.random() * fonds.length);

// Condition si l'indice est différent de l'indice en cours
    while (lastIndex !== null && indice == lastIndex) {
        indice = Math.floor(Math.random() * fonds.length);
    }
    lastIndex = indice;

// Ajouter la classe CSS correspondant à l'indice aléatoire
    container.toggleClass(fonds[indice]);
// Message d'alerte de sweet alert 2 

Swal.fire({
    title: 'Fond d\'écran changé!',
    text: ' ........Votre fond d\'écran a été mis à jour avec succès....... C\'est pénible, hein ? ',
    icon: 'success'
});

}; // fin de la fonction

// Ajouter un écouteur d'événement au clic du bouton avec la fonction fléchée changerFond
bouton[0].onclick = changerFond;

// J'ai eu du mal avec la logique et j'ai tenté de réduire au maximum 
// ma formule avec l'aide de chat gpt, est -ce un problème de compter sur lui?

// Tentative avec Mo.js d'animer le titre

const SWIRL_OPTS = {
    left: 0, top: 0,
    fill:           '#F93E39',
    duration:       'rand(500, 5000)',
    radius:         'rand(10, 20)',
    pathScale:      'rand(.5, 3)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)',
}

const swirl1 = new mojs.ShapeSwirl({
...SWIRL_OPTS
});

const swirl2 = new mojs.ShapeSwirl({
...SWIRL_OPTS,
direction: -1
});

const swirl3 = new mojs.ShapeSwirl({
...SWIRL_OPTS
});

const swirl4 = new mojs.ShapeSwirl({
...SWIRL_OPTS
});

document.addEventListener('click', function (e) {
const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
swirl1
    .tune({ x, y })
    .generate()
    .replay();

swirl2
    .tune({ x, y })
    .generate()
    .replay();

swirl3
    .tune({ x, y })
    .generate()
    .replay();

swirl4
    .tune({ x, y })
    .generate()
    .replay();

});


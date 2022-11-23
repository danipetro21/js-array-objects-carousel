// Consegna:

// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.



let img;

// variabili container
const div = document.querySelector(".slider");
const titleC = document.querySelector(".title");
const textC = document.querySelector(".textprova");

// bottoni prev / next
let next = document.getElementById("next");
let prev = document.getElementById("prev");

//anteprima delle immagini
let imgAnteprima1 = document.getElementById('img1');
let imgAnteprima2 = document.getElementById('img2');
let imgAnteprima3 = document.getElementById('img3');
let imgAnteprima4 = document.getElementById('img4');
let imgAnteprima5 = document.getElementById('img5');

// contatore e limiti
let contatore = 0;
let maxLimit = 4;
let minLimit = 0;

// array di oggetti IMAGES

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }];




//reset dell'immagine di default quando si fa il refresh della pagina
img = `<img src="${images[0].image}" alt="img${contatore}">`;
title = `<h1 class="text">${images[0].title}</h1>`;
text = `<h3 class="text">${images[0].text}</h3>`;
div.innerHTML = img;
titleC.innerHTML = title;
textC.innerHTML = text;
imgAnteprima1.style.cssText = 'border: 5px solid red;';

// funzione next

next.addEventListener("click", function () {

    // controllo con if se il contatore è arrivato all'ultima immagine cosi da poter ricomnciare con il "ciclo"
    if (contatore == maxLimit) {
        contatore = (minLimit - 1);
    }
    contatore++;
    anteprima(contatore);

    // stampo le immagine sull'html secondo il nome che hanno 


    img = `<img src="${images[contatore].image}" alt="img${contatore}">`;
    title = `<h1 class="text">${images[contatore].title}</h1>`;
    text = `<h3 class="text">${images[contatore].text}</h3>`;
    // aggiungo l'immagine all'html
    div.innerHTML = img;
    titleC.innerHTML = title;
    textC.innerHTML = text;


});

// funzione prev per tornare indietro con le immagini
prev.addEventListener("click", function () {
    // se il contatore è arrivato ad uno riparto con l'ultima immagine
    if (contatore == minLimit) {
        contatore = (maxLimit + 1);
    }
    contatore--;
    anteprima(contatore);

    img = `<img src="${images[contatore].image}" alt="img${contatore}">`;
    title = `<h1 class="text">${images[contatore].title}</h1>`;
    text = `<h3 class="text">${images[contatore].text}</h3>`;
    div.innerHTML = img;
    titleC.innerHTML = title;
    textC.innerHTML = text;


});

// prova anteprima


function anteprima(contatore) {


    if (contatore == 0) {
        imgAnteprima1.style.cssText = 'border: 5px solid red;';
        
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';

    }
    if (contatore == 1) {
        imgAnteprima2.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';

    } else if (contatore == 2) {
        imgAnteprima3.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';

    } else if (contatore == 3) {
        imgAnteprima4.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima5.style.cssText = 'border: trasparent; opacity: 0.3;';

    } else if (contatore == 4) {
        imgAnteprima5.style.cssText = 'border: 5px solid red;';
        imgAnteprima1.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima2.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima4.style.cssText = 'border: trasparent; opacity: 0.3;';
        imgAnteprima3.style.cssText = 'border: trasparent; opacity: 0.3;';

    }
}

//prova click img

imgAnteprima1.addEventListener('click', (event) => {
    img = `<img src="${images[0].image}" alt="img${0}">`;
    div.innerHTML = img;
});

imgAnteprima2.addEventListener('click', (event) => {
    img = `<img src="${images[1].image}" alt="img${1}">`;
    div.innerHTML = img;
});
imgAnteprima3.addEventListener('click', (event) => {
    img = `<img src="${images[2].image}" alt="img${2}">`;
    div.innerHTML = img;
});
imgAnteprima4.addEventListener('click', (event) => {
    img = `<img src="${images[3].image}" alt="img${3}">`;
    div.innerHTML = img;
});
imgAnteprima5.addEventListener('click', (event) => {
    img = `<img src="${images[4].image}" alt="img${4}">`;
    div.innerHTML = img;
});


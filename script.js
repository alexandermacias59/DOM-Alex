// // trovare un elemento nel DOM

// // getElementById
// const divOne = document.getElementById("div1");
// console.log(divOne);

// // getElementsByClassNAme

// const pCollection = document.getElementsByClassName("pippo");
// console.log(pCollection);


// const divCollection = document.getElementsByClassName("pluto");
// console.log(divCollection);


// // getElementsByTagNAme

// const tagCollection = document.getElementsByTagName("p");
// console.log(tagCollection);

// // querySelector

// const firstP = document.querySelector("p");
// console.log(firstP);

// // querySelectorAll

// const allPs = document.querySelectorAll("p");
// console.log(allPs);

// const allPippo = document.querySelectorAll(".pippo");
// console.log(allPippo);

// const divOneA = document.querySelector("#div1");
// console.log(divOneA);


// //////////// LEGGERE IL CONTENUTO

// console.log(divOne.innerText);
// console.log(divOne.textContent);
// console.log(divOne.innerHTML);
// console.log(divOne.outerHTML);
// console.log(divOne.children);


// ////// SCRIVERE IL CONTENUTO

// //appendChild
// const newP = document.createElement("p");
// divOne.appendChild(newP);

// // createTextNode

// const node = document.createTextNode("quarto");
// newP.appendChild(node);

// //innerHTML

// newP.innerHTML = "quarto paragrafo";
// newP.innerHTML = "<strong>quarto paragrafo</strong>";

// //esempio

// const studenti1 = {name: "alexander", surname:"macias", age : 26, gender: "male"};
// const studenti2 = {name: "evelyn", surname:"medina", age : undefined, gender: "female"};

// //appendchild

// const emptyDiv = document.getElementById("empty-div");

// const cardDiv = document.createElement("div");
// cardDiv.id = "first-card";
// emptyDiv.appendChild(cardDiv);

// const nameP = document.createElement("p");
// const nameNode = document.createTextNode("nome: "+ studenti1.name);
// nameP.appendChild(nameNode);
// cardDiv.appendChild(nameP);

// const surnameP = document.createElement("p");
// const surnameNode = document.createTextNode("cognome: "+ studenti1.surname);
// surnameP.appendChild(surnameNode);
// cardDiv.appendChild(surnameP);

// const ageP = document.createElement("p");
// const ageNode = document.createTextNode("age: "+ studenti1.age);
// ageP.appendChild(ageNode);
// cardDiv.appendChild(ageP);

// const genderP = document.createElement("p");
// const genderNode = document.createTextNode("age: "+ studenti1.gender);
// genderP.appendChild(genderNode);
// cardDiv.appendChild(genderP);


// //innerHTML

// const htmlString = `<div class= "card">
//                         <p>nome: ${studenti2.name}</p>
//                         <p>cognome: ${studenti2.surname}</p>
//                         <p>eta: ${studenti2.age} </p>
//                         <p>genere: ${studenti2.gender}</p>
//                     </div>`

// console.log(htmlString);
// console.log(emptyDiv.innerHTML);
// // emptyDiv.innerHTML = emptyDiv.innerHTML + htmlString;
// emptyDiv.innerHTML += htmlString;


// //AGGIUNGERE CLASSI
// const card = document.getElementById("first-card");
// // card.className = "card";
// card.classList.add("card");
// card.classList.add("green-background");
// // card.classList.remove("green-background");

///// ESERCIZIO FRUTTA

// const fruits = [
//     {name: "banana", origin: "ecuador", weight: 100},
//     {name: "mela", origin: "italia", weight: 200},
//     {name: "mango", origin: "venezuela", weight: 50},
//     {name: "avocado", origin: "perù", weight: 10},
//     {name: "papaya", origin: "guatemala", weight: 70},
// ]

// const container = document.getElementById('fruit-container');

// for (const fruit of fruits) {
    
//     const fruitHtml = `<div class="card">
//     <p>nome: ${fruit.name}</p>
//     <p>origin: ${fruit.origin}</p>
//     <p>peso: ${fruit.weight} kg</p>
// </div>`

// container.innerHTML += fruitHtml;

// }


// // frutta con AppendChild

// const fruitContainer = document.getElementById("fruit-container");

// for (const fruit of fruits) {

// const fruitDiv = document.createElement("div");
// fruitDiv.id = "first-card";
// fruitContainer.appendChild(fruitDiv);
// fruitDiv.classList.add("fruit-card");

// const namefruit = document.createElement("p");
// const fruitNode = document.createTextNode("Nome: "+ fruit.name);
// namefruit.appendChild(fruitNode);
// fruitDiv.appendChild(namefruit);

// const originFruit = document.createElement("p");
// const originNode = document.createTextNode("Origin: "+ fruit.origin);
// originFruit.appendChild(originNode);
// fruitDiv.appendChild(originFruit);

// const weightFruit = document.createElement("p");
// const weightNode = document.createTextNode("Peso: "+ fruit.weight + " kg");
// weightFruit.appendChild(weightNode);
// fruitDiv.appendChild(weightFruit);
// }

///// ESERCIZIO COSMETICI
// const cosmetics = [
//     {
//         id: 1,
//         nome: "Crema Idratante Viso",
//         marca: "Nivea",
//         categoria: "Skincare",
//         prezzo: 12.99,
//         ingredientiPrincipali: ["Aloe Vera", "Acido Ialuronico", "Vitamina E"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 2,
//         nome: "Mascara Volume",
//         marca: "Maybelline",
//         categoria: "Makeup",
//         prezzo: 9.99,
//         ingredientiPrincipali: ["Cera d'Api", "Pigmenti Minerali"],
//         usoConsigliato: "Ogni volta che si desidera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 3,
//         nome: "Shampoo Antiforfora",
//         marca: "Head & Shoulders",
//         categoria: "Haircare",
//         prezzo: 6.49,
//         ingredientiPrincipali: ["Piroctone Olamine", "Zinco Pyrithione"],
//         usoConsigliato: "2-3 volte a settimana",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 4,
//         nome: "Balsamo Labbra",
//         marca: "Burt's Bees",
//         categoria: "Skincare",
//         prezzo: 4.99,
//         ingredientiPrincipali: ["Cera d'Api", "Olio di Cocco"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.8,
//         inStock: true
//     },
//     {
//         id: 5,
//         nome: "Fondotinta Liquido",
//         marca: "L'Oréal Paris",
//         categoria: "Makeup",
//         prezzo: 14.99,
//         ingredientiPrincipali: ["Olio di Jojoba", "SPF 15"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 6,
//         nome: "Siero Anti-Age",
//         marca: "The Ordinary",
//         categoria: "Skincare",
//         prezzo: 19.99,
//         ingredientiPrincipali: ["Retinolo", "Vitamina C"],
//         usoConsigliato: "Sera",
//         recensioni: 4.6,
//         inStock: false
//     },
//     {
//         id: 7,
//         nome: "Ombretto Palette",
//         marca: "NYX",
//         categoria: "Makeup",
//         prezzo: 16.99,
//         ingredientiPrincipali: ["Pigmenti Minerali", "Olio di Ricino"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 8,
//         nome: "Detergente Viso",
//         marca: "La Roche-Posay",
//         categoria: "Skincare",
//         prezzo: 13.99,
//         ingredientiPrincipali: ["Acqua Termale", "Glicerina"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 9,
//         nome: "Lacca per Capelli",
//         marca: "TRESemmé",
//         categoria: "Haircare",
//         prezzo: 7.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Pantenolo"],
//         usoConsigliato: "Dopo lo styling",
//         recensioni: 4.0,
//         inStock: true
//     },
//     {
//         id: 10,
//         nome: "Correttore Occhiaie",
//         marca: "MAC",
//         categoria: "Makeup",
//         prezzo: 22.99,
//         ingredientiPrincipali: ["Olio di Argan", "Caffeina"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 11,
//         nome: "Maschera Capelli",
//         marca: "Garnier",
//         categoria: "Haircare",
//         prezzo: 5.99,
//         ingredientiPrincipali: ["Olio di Avocado", "Cheratina"],
//         usoConsigliato: "1 volta a settimana",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 12,
//         nome: "Blush in Polvere",
//         marca: "Milani",
//         categoria: "Makeup",
//         prezzo: 10.99,
//         ingredientiPrincipali: ["Mica", "Olio di Jojoba"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 13,
//         nome: "Tonico Viso",
//         marca: "Clinique",
//         categoria: "Skincare",
//         prezzo: 18.99,
//         ingredientiPrincipali: ["Acido Salicilico", "Camomilla"],
//         usoConsigliato: "Dopo la detersione",
//         recensioni: 4.6,
//         inStock: true
//     },
//     {
//         id: 14,
//         nome: "Smalto Semipermanente",
//         marca: "OPI",
//         categoria: "Nailcare",
//         prezzo: 11.99,
//         ingredientiPrincipali: ["Resine Acriliche", "Pigmenti"],
//         usoConsigliato: "Ogni 2 settimane",
//         recensioni: 4.8,
//         inStock: false
//     },
//     {
//         id: 15,
//         nome: "Profumo Donna",
//         marca: "Chanel",
//         categoria: "Fragrance",
//         prezzo: 99.99,
//         ingredientiPrincipali: ["Note di Vaniglia", "Fiori Bianchi"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 16,
//         nome: "Scrub Corpo",
//         marca: "The Body Shop",
//         categoria: "Bodycare",
//         prezzo: 15.99,
//         ingredientiPrincipali: ["Zucchero di Canna", "Olio di Mandorle"],
//         usoConsigliato: "2 volte a settimana",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 17,
//         nome: "Eyeliner Liquido",
//         marca: "Kiko Milano",
//         categoria: "Makeup",
//         prezzo: 8.99,
//         ingredientiPrincipali: ["Pigmenti Neri", "Glicerina"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 18,
//         nome: "Crema Mani",
//         marca: "Neutrogena",
//         categoria: "Skincare",
//         prezzo: 6.99,
//         ingredientiPrincipali: ["Glicerina", "Olio di Karité"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 19,
//         nome: "Spray Fissante Makeup",
//         marca: "Urban Decay",
//         categoria: "Makeup",
//         prezzo: 24.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Glicerina"],
//         usoConsigliato: "Dopo il trucco",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 20,
//         nome: "Olio per Capelli",
//         marca: "Moroccanoil",
//         categoria: "Haircare",
//         prezzo: 39.99,
//         ingredientiPrincipali: ["Olio di Argan", "Vitamina E"],
//         usoConsigliato: "1-2 volte a settimana",
//         recensioni: 4.8,
//         inStock: true
//     }
// ];


// const cosmeticsContainer = document.getElementById("cosmetics-container");

// for (const cosmetic of cosmetics) {

// const cosmeticDiv = document.createElement("div");
// cosmeticDiv.id = "first-card-cosmetic";
// cosmeticsContainer.appendChild(cosmeticDiv);
// cosmeticDiv.classList.add("cosmetic-card");

// const idCosmetic = document.createElement("p");
// const idNode = document.createTextNode("Numero ID prodotto: "+ cosmetic.id);
// idCosmetic.appendChild(idNode);
// cosmeticDiv.appendChild(idCosmetic);

// const nameCosmetic = document.createElement("p");
// const nameCosmeticNode = document.createTextNode("Nome: "+ cosmetic.nome);
// nameCosmetic.appendChild(nameCosmeticNode);
// cosmeticDiv.appendChild(nameCosmetic);

// const brandCosmetic = document.createElement("p");
// const brandCosmeticNode = document.createTextNode("Marca: "+ cosmetic.marca);
// brandCosmetic.appendChild(brandCosmeticNode);
// cosmeticDiv.appendChild(brandCosmetic);

// const categoryCosmetic = document.createElement("p");
// const categoryCosmeticNode = document.createTextNode("Categoria: "+ cosmetic.categoria);
// categoryCosmetic.appendChild(categoryCosmeticNode);
// cosmeticDiv.appendChild(categoryCosmetic);

// const priceCosmetic = document.createElement("p");
// const priceCosmeticNode = document.createTextNode("Prezzo: "+ cosmetic.prezzo + " €");
// priceCosmetic.appendChild(priceCosmeticNode);
// cosmeticDiv.appendChild(priceCosmetic);
// cosmeticDiv.appendChild(brandCosmetic);

// const principalIngredientsCosmetic = document.createElement("p");
// const principalIngredientsCosmeticNode = document.createTextNode("Ingredienti Principali: "+ cosmetic.ingredientiPrincipali.join(", "));
// principalIngredientsCosmetic.appendChild(principalIngredientsCosmeticNode);
// cosmeticDiv.appendChild(principalIngredientsCosmetic);

// const reccomendedUseCosmetic = document.createElement("p");
// const reccomendedUseCosmeticNode = document.createTextNode("Uso Consigliato: "+ cosmetic.usoConsigliato);
// reccomendedUseCosmetic.appendChild(reccomendedUseCosmeticNode);
// cosmeticDiv.appendChild(reccomendedUseCosmetic);

// const reviewsCosmetic = document.createElement("p");
// const reviewsCosmeticNode = document.createTextNode("Recensioni: "+ cosmetic.recensioni);
// reviewsCosmetic.appendChild(reviewsCosmeticNode);
// cosmeticDiv.appendChild(reviewsCosmetic);

// const availabilityCosmetic = document.createElement("p");
// const availabilityCosmeticNode = document.createTextNode("Disponibilità: "+ (cosmetic.inStock ? "In stock" : "Non disponibile"));
// availabilityCosmetic.appendChild(availabilityCosmeticNode);
// cosmeticDiv.appendChild(availabilityCosmetic);
// }


// //COSMETICI CON INNERHTML


// const containerCosmetics = document.getElementById('cosmetics-container2');

// for (const cosmetic of cosmetics) {
    
//     const cosmeticsHtml = `<div class="card2-cosmetics">
//                                 <p><strong>ID prodotto:</strong> ${cosmetic.id}</p>
//                                 <p><strong>Nome:</strong> ${cosmetic.nome}</p>
//                                 <p><strong>Categoria:</strong> ${cosmetic.categoria}</p>
//                                 <p><strong>Prezzo:</strong> ${cosmetic.prezzo} €</p>
//                                 <p><strong>Marca:</strong> ${cosmetic.marca} </p>
//                                 <p><strong>Ingredienti principali:</strong> ${cosmetic.ingredientiPrincipali}</p>
//                                 <p><strong>Uso consigliato:</strong> ${cosmetic.usoConsigliato}</p>
//                                 <p><strong>Recensioni:</strong> ${cosmetic.recensioni}</p>
//                                 <p><strong>Disponibilità:</strong> ${cosmetic.inStock ? "In stock" : "Non disponibile"}</p>
//                             </div>`

// containerCosmetics.innerHTML += cosmeticsHtml;

// }


//EVENTI

function pressedButton(){
    alert("Non esagerare!!!")
}

// addEventListener

const myBtn = document.getElementById("press-counter");
let totalPress = 0;
function addPress(){
    totalPress += 1;
    console.log(totalPress);
    const displayer = document.getElementById("press-displayer");
    displayer.innerHTML += "hai schiacciato " + totalPress + " volte<br>";
}
myBtn.addEventListener("click", addPress);


//classList toggle

const switchBtn = document.getElementById("switch-btn");
function swtichOn(){
    switchBtn.classList.toggle("on");
    const span = document.querySelector("#switch-btn span");
    if(span.innerText == "OFF"){
        span.innerText = "ON";
    } else {
        span.innerText = "OFF";
    }
}
switchBtn.addEventListener("click",swtichOn);

//mouse enter/leave

const badDiv = document.getElementById("bad-div");
badDiv.addEventListener("mouseenter", () => badDiv.innerHTML = "che fai? mi tocchi?");
badDiv.addEventListener("mouseleave", () => badDiv.innerHTML = "fai attenzione!!!")


//Style
const styleDiv = document.getElementById("style-div");
styleDiv.style.backgroundColor = "violet";

//set attribute
const marioImage = document.getElementById("mario-image");
marioImage.setAttribute("width", "100");
marioImage.setAttribute("pippo", "pluto")
// trovare un elemento nel DOM

// getElementById
const divOne = document.getElementById("div1");
console.log(divOne);

// getElementsByClassNAme

const pCollection = document.getElementsByClassName("pippo");
console.log(pCollection);


const divCollection = document.getElementsByClassName("pluto");
console.log(divCollection);


// getElementsByTagNAme

const tagCollection = document.getElementsByTagName("p");
console.log(tagCollection);

// querySelector

const firstP = document.querySelector("p");
console.log(firstP);

// querySelectorAll

const allPs = document.querySelectorAll("p");
console.log(allPs);

const allPippo = document.querySelectorAll(".pippo");
console.log(allPippo);

const divOneA = document.querySelector("#div1");
console.log(divOneA);


//////////// LEGGERE IL CONTENUTO

console.log(divOne.innerText);
console.log(divOne.textContent);
console.log(divOne.innerHTML);
console.log(divOne.outerHTML);
console.log(divOne.children);


////// SCRIVERE IL CONTENUTO

//appendChild
const newP = document.createElement("p");
divOne.appendChild(newP);

// createTextNode

const node = document.createTextNode("quarto");
newP.appendChild(node);

//innerHTML

newP.innerHTML = "quarto paragrafo";
newP.innerHTML = "<strong>quarto paragrafo</strong>";

//esempio

const studenti1 = {name: "alexander", surname:"macias", age : 26, gender: "male"};
const studenti2 = {name: "evelyn", surname:"medina", age : undefined, gender: "female"};

//appendchild

const emptyDiv = document.getElementById("empty-div");

const cardDiv = document.createElement("div");
cardDiv.id = "first-card";
emptyDiv.appendChild(cardDiv);

const nameP = document.createElement("p");
const nameNode = document.createTextNode("nome: "+ studenti1.name);
nameP.appendChild(nameNode);
cardDiv.appendChild(nameP);

const surnameP = document.createElement("p");
const surnameNode = document.createTextNode("cognome: "+ studenti1.surname);
surnameP.appendChild(surnameNode);
cardDiv.appendChild(surnameP);

const ageP = document.createElement("p");
const ageNode = document.createTextNode("age: "+ studenti1.age);
ageP.appendChild(ageNode);
cardDiv.appendChild(ageP);

const genderP = document.createElement("p");
const genderNode = document.createTextNode("age: "+ studenti1.gender);
genderP.appendChild(genderNode);
cardDiv.appendChild(genderP);


//innerHTML

const htmlString = `<div class= "card">
                        <p>nome: ${studenti2.name}</p>
                        <p>cognome: ${studenti2.surname}</p>
                        <p>eta: ${studenti2.age} </p>
                        <p>genere: ${studenti2.gender}</p>
                    </div>`

console.log(htmlString);
console.log(emptyDiv.innerHTML);
// emptyDiv.innerHTML = emptyDiv.innerHTML + htmlString;
emptyDiv.innerHTML += htmlString;


//AGGIUNGERE CLASSI
const card = document.getElementById("first-card");
// card.className = "card";
card.classList.add("card");
card.classList.add("green-background");
// card.classList.remove("green-background");

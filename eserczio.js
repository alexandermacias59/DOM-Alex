console.log('pagina due funziona')

const nintendoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Action-Adventure", "Open World"],
        releaseYear: 2017,
        developer: "Monolith Soft, Nintendo EPD",
        isMultiplayer: false,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true,
        img: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/NOE/70010000000023/SQ_NSwitch_TheLegendOfZeldaBreathOfTheWild_E"
    },
    {
        title: "Super Mario Odyssey",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2017,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 97,
        priceUSD: 69.99,
        isExclusive: true,
        img: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/NOE/70010000000127/SQ_NSwitch_SuperMarioOdyssey_HomepageWithOverlay"    },
    {
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
        genre: ["Life Simulation", "Social Simulation"],
        releaseYear: 2020,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 90,
        priceUSD: 29.99,
        isExclusive: true,
        img: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000027620/1.1_2000x2000_ProductTile_Switch_AnimalCrossingNewHorizons_KeyVisual_enGB_v1_100q"
    },
    {
        title: "Metroid Dread",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Platform"],
        releaseYear: 2021,
        developer: "MercurySteam, Nintendo EPD",
        isMultiplayer: false,
        rating: 88,
        priceUSD: 19.99,
        isExclusive: true,
        img: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000042925/SQ_NSwitch_MetroidDread"
    },
    {
        title: "Splatoon 3",
        platform: ["Nintendo Switch"],
        genre: ["Shooter", "Action"],
        releaseYear: 2022,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 83,
        priceUSD: 39.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Pokémon Scarlet and Violet",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Adventure"],
        releaseYear: 2022,
        developer: "Game Freak",
        isMultiplayer: true,
        rating: 72,
        priceUSD: 59.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Super Smash Bros. Ultimate",
        platform: ["Nintendo Switch"],
        genre: ["Fighting", "Action"],
        releaseYear: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        isMultiplayer: true,
        rating: 93,
        priceUSD: 89.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: ["Nintendo Switch"],
        genre: ["Racing", "Party"],
        releaseYear: 2017,
        developer: "Nintendo EAD",
        isMultiplayer: true,
        rating: 92,
        priceUSD: 89.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Fire Emblem: Three Houses",
        platform: ["Nintendo Switch"],
        genre: ["Tactical RPG", "Strategy"],
        releaseYear: 2019,
        developer: "Intelligent Systems, Koei Tecmo",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 9.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Luigi’s Mansion 3",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Puzzle"],
        releaseYear: 2019,
        developer: "Next Level Games",
        isMultiplayer: true,
        rating: 86,
        priceUSD: 59.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2018,
        developer: "Retro Studios",
        isMultiplayer: true,
        rating: 87,
        priceUSD: 49.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Xenoblade Chronicles 3",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Action"],
        releaseYear: 2022,
        developer: "Monolith Soft",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 19.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2022,
        developer: "HAL Laboratory",
        isMultiplayer: true,
        rating: 85,
        priceUSD: 49.99,
        isExclusive: true,
        img: ""
    },
    {
        title: "Bayonetta 3",
        platform: ["Nintendo Switch"],
        genre: ["Action", "Hack and Slash"],
        releaseYear: 2022,
        developer: "PlatinumGames",
        isMultiplayer: false,
        rating: 87,
        priceUSD: 9.99,
        isExclusive: true,
        img: ""
    }
]


function renderGameList(games) {

    const gameCont = document.getElementById('game-container');
    gameCont.innerHTML = '';

    for (const game of games) {

        const gameCard = document.createElement('div');
        gameCard.classList.add("game-cont-div");

        const imgElement = document.createElement('img');
        imgElement.src = game.img;
        imgElement.alt = game.title;
        gameCard.appendChild(imgElement);

        const titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode('Nome: ' + game.title));
        gameCard.appendChild(titleSpan);

        const platformSpan = document.createElement('span');
        platformSpan.appendChild(document.createTextNode('Piattaforma: ' + game.platform));
        gameCard.appendChild(platformSpan);

        const genreSpan = document.createElement('span');
        genreSpan.appendChild(document.createTextNode('Genere: ' + game.genre.join(', ')));
        gameCard.appendChild(genreSpan);

        const releaseYearSpan = document.createElement('span');
        releaseYearSpan.appendChild(document.createTextNode('Anno di rilascio: ' + game.releaseYear));
        gameCard.appendChild(releaseYearSpan);

        const developerSpan = document.createElement('span');
        developerSpan.appendChild(document.createTextNode('Sviluppatore: ' + game.developer));
        gameCard.appendChild(developerSpan);

        const isMultiplayerSpan = document.createElement('span');
        isMultiplayerSpan.appendChild(document.createTextNode('Multiplayer: ' + (game.isMultiplayer ? 'Sì' : 'No')));
        gameCard.appendChild(isMultiplayerSpan);

        const ratingSpan = document.createElement('span');
        ratingSpan.appendChild(document.createTextNode('Recensioni: ' + game.rating + '/100'));
        gameCard.appendChild(ratingSpan);

        const priceSpan = document.createElement('span');
        priceSpan.appendChild(document.createTextNode('Prezzo: $' + game.priceUSD));
        gameCard.appendChild(priceSpan);

        const isExclusiveSpan = document.createElement('span');
        isExclusiveSpan.appendChild(document.createTextNode('Esclusiva Nintendo'+ (game.isExclusive ? 'Si': 'No')))

        gameCont.appendChild(gameCard);

    }
}


renderGameList(nintendoGames);


//funzion per il bottone che ordina i giochi per titolo dalla A alla Z

const orderTitleBtnAsc = document.getElementById('title-order-asc');

function compareTitlesAsc(g1, g2){
    return g1.title.localeCompare(g2.title);
}

function orderGamesByTitleAsc(){

    nintendoGames.sort(compareTitlesAsc);

    renderGameList(nintendoGames);

}

orderTitleBtnAsc.addEventListener('click', orderGamesByTitleAsc);

//funzion per il bottone che ordina i giochi per titolo dalla Z alla A

const orderTitleBtnDesc = document.getElementById('title-order-desc');
function compareTitlesDesc(g1, g2){
    return g2.title.localeCompare(g1.title);
}

function orderGamesByTitleDesc(){

    nintendoGames.sort(compareTitlesDesc);

    renderGameList(nintendoGames);

}

orderTitleBtnDesc.addEventListener('click', orderGamesByTitleDesc);

//funzione per il bottone che ordina i giochi per prezzo crescente

const orderPriceBtnAsc = document.getElementById('price-order-asc');
function comparePricesAsc(g1, g2){
    return g1.priceUSD - g2.priceUSD;
}
function orderGamesByPriceAsc(){
    nintendoGames.sort(comparePricesAsc);
    renderGameList(nintendoGames);
}

orderPriceBtnAsc.addEventListener("click", orderGamesByPriceAsc)


//funzione per il bottone che ordina i giochi per prezzo decrescente

const orderPriceBtnDesc = document.getElementById('price-order-desc');
function comparePricesDesc(g1, g2){
    return g2.priceUSD - g1.priceUSD;
}
function orderGamesByPriceDesc(){
    nintendoGames.sort(comparePricesDesc);
    renderGameList(nintendoGames);
}

orderPriceBtnDesc.addEventListener("click", orderGamesByPriceDesc)

//funzione per il bottone che ordina i giochi per rating crescente

const orderRatingBtnAsc = document.getElementById('rating-order-asc');
function compareRatingsAsc(g1, g2){
    return g1.rating - g2.rating;
}
function orderGamesByRatingAsc(){
    nintendoGames.sort(compareRatingsAsc);
    renderGameList(nintendoGames);
}

orderRatingBtnAsc.addEventListener("click", orderGamesByRatingAsc);

//funzione per il bottone che ordina i giochi per rating decrescente

const orderRatingBtnDesc = document.getElementById('rating-order-desc');
function compareRatingsDesc(g1, g2){
    return g2.rating - g1.rating;
}
function orderGamesByRatingDesc(){
    nintendoGames.sort(compareRatingsDesc);
    renderGameList(nintendoGames);
}

orderRatingBtnDesc.addEventListener("click", orderGamesByRatingDesc);

/// completare le schede dei giochi rendendole molto belle! (con tutte le proprietà)
/// aggiungere l'ordinamento per prezzo (dal più economico al più caro)
/// aggiungere l'ordinamento per rating (dal rating migliore al peggiore)
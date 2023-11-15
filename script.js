//MODELL//

let hansemann = {
name: "Hansemann",
health: 50,
image: "image/hansemann.png",
level: 20,
};

let jokkimsen = {
    name: "Jokkimsen",
    health: 100,
    image: "image/jokkimsen.png",
    level: 100,
};



let mundsen = {
    name: "Mundsen",
    health: 69,
    image: "image/mundsen2.jpg",
    level: 420,
};


let pørni = {
    name: "Pørni",
    health: 75,
    image: "",
    level: 42,
};

let stefan = {
    name: "Stefan",
    health: 100,
    image: "",
    level: 30,
};

let satan = {
    name: "Satan",
    health: 666,
    image: "image/satan.png",
    level: 1000,
};

let player = {
    name: "Champion",
    image: "image/Køllaferdig.jpg",
};

let possibleGpser = [hansemann, jokkimsen, mundsen, pørni, stefan, satan];
let randomGpser;

let playerGpser = [];

let app = document.getElementById("app");



//VIEW//
updateView();


function updateView(){
    getRandomGpser();
    app.innerHTML = /*HTML*/ `
    <div class="container">
    <div class="opposingGpser">
    <div>${randomGpser.name}</div>
    <div>lvl: ${randomGpser.level}</div>
    <div> Health: ${randomGpser.health}</div>
    <img src="${randomGpser.image}">
    </div>

    <div class="bottomScreen">
    <div class="player">
    <img src="${player.image}">
    <div>${player.name}</div>
    </div>
    

    <div class="buttonContainer">
    <button onclick="catchGpser()">Fang</button>
    <button onclick="updateView()">Finn en annen</button>
    <button onclick="catchGpser()">Vis dine GPS-ere</button>
    </div>
    
</div>

</div>

    `;
}

//CONTROLLER//

function caughtGpserView(){
    app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
    <h1>Du fanget ${playerGpser[playerGpser.length - 1].name}</h1>
    <div class="buttonContainer">
    <button onclick="updateView()">Finn en annen</button>
    <button onclick="showGpser()">Vis dine Gps'ere</button>
    </div>
    </div>
    `;
}

function catchGpser(){
    playerGpser.push(randomGpser);
    caughtGpserView();
}

function showGpser(){
    console.log(playerGpser);
}

function getRandomGpser(){
    let randomNum = Math.floor(Math.random()* possibleGpser.length);
    randomGpser = possibleGpser[randomNum];
}


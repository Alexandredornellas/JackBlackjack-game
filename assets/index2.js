let isAlive = false;
let cards = "";
let sum = 0;
let sumEl = document.getElementById("sum-el");
let divCardsWrapper = document.getElementById("div-cards");
let message = "";
let messageEl = document.getElementById("message-el");
let startBtn = document.getElementById("btn-start")
let backGroundImg = document.querySelector(".jack-black-face");

function renderGame(){

    //reseta os elementos na tela
    document.querySelectorAll('img').forEach((elem) => elem.remove());
    sum = 0;

    //cria os elementos na tela (sim, muito não perfomático, mas vou melhorar no futuro).
    for (let i = 0; i < cards.length; i++){
        let createCardImgElement = document.createElement("img");
        cardID = "card"+[i+1];
        createCardImgElement.id = cardID;
        createCardImgElement.src = cards[i].src;
        divCardsWrapper.appendChild(createCardImgElement);
        sum += parseInt(cards[i].value);
        sumEl.textContent = "Sum: " + sum + "points";
    }
    if(isAlive === true){
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        backGroundImg.style.backgroundImage = "url('https://www.gannett-cdn.com/-mm-/460a40eda64cabeb782fe8ed8194c760dcd49232/c=0-288-3456-4896/local/-/media/2015/10/12/USATODAY/USATODAY/635802695524220727-XXX-AK2T6101-76546378.JPG?width=600&height=800&fit=crop&format=pjpg&auto=webp')";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        backGroundImg.style.backgroundImage = "url('https://i.pinimg.com/736x/9b/56/29/9b5629c68afcb39fdd08fcc11c63139a--jack-black-celebrity-faces.jpg')";
        isAlive = false;
    } else {
        message = "You're out of the game!";
        backGroundImg.style.backgroundImage = "url('https://www.du-hd.com/wp-content/uploads/2018/09/Jack-Black.png')";
        isAlive = false;
    }
    messageEl.textContent = message;
    }
};

function startGame(){
    isAlive = true;
    let newCards = []
    newCards.push(randomCards());
    newCards.push(randomCards());
    cards = newCards;

    startBtn.textContent = "RESTART";
    renderGame();


} 

function randomCards(){
    //gerar aleatoriamente um número
    let randomNumber = Math.floor(Math.random() *13 ) + 1;

    
    // Inserir no objeto cards o src e valor da carta contendo o número aleatório.
        let newCard = {
        src: "https://xn--pacincia-n1a.eu/media/cards/" + randomNumber + "h.png",
        value: randomNumber
        }

    //Tratamento para "J, Q, K" terem o valor de 11
    if (randomNumber > 10){
        newCard.value = 11;
    }

    // retornar o objeto.
    return newCard;

};

function newCard(){
    if(isAlive === true){
        cards.push(randomCards());
        renderGame();
    } else {
        messageEl.textContent = "You're out buddy, restart"
    }
    //Similar ao startGame, deve receber um objeto carta do randomCards()
    //e chamar o renderGame para inserir a carta na tela.
};


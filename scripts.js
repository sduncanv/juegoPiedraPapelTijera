
//En estos array se guarda el nombre de los jugadores, para operar con ellos después
const namePlayer1 = [];
const namePlayer2 = [];

//Estas son las funciones para inciar el juego y empezar un nuevo juego
const start = () => {
    
    const firstName = document.getElementById('firstName');
    const valueFirstName = firstName.value;
    namePlayer1.push(valueFirstName);
    const secondName = document.getElementById('secondName');
    const valueSecondName = secondName.value;
    namePlayer2.push(valueSecondName);
    
    document.getElementById('playerF').innerHTML;
    document.getElementById('playerF').innerHTML = valueFirstName + " y ";

    document.getElementById('playerS').innerHTML;
    document.getElementById('playerS').innerHTML = valueSecondName;
}

const restar = () => {

    document.getElementById('firstName').value = "";
    document.getElementById('playerF').innerHTML = "";
    document.getElementById('secondName').value = "";
    document.getElementById('playerS').innerHTML = "";
    document.getElementById('spanResult').innerHTML = "Esperando nuevos jugadores ...";

}

//Aquí se guarda la opción del jugador donde, piedra = 1, papel = 2 y tijera = 3
const opcionFirst = [];
const opcionSecond = [];

//Se capturan los eventos y se manda la información a los arrays anteriores
const stoneFirst = document.getElementById('buttonStoneFirst');
const paperFirst = document.getElementById('buttonPaperFirst');
const scissorFirst = document.getElementById('buttonScissorFirst');

stoneFirst.addEventListener("click", () => {
    opcionFirst.push(1)
});
paperFirst.addEventListener("click", () => {
    opcionFirst.push(2)
});
scissorFirst.addEventListener("click", () => {
    opcionFirst.push(3)
});

const stoneSec = document.getElementById('buttonStoneSec');
const paperSec = document.getElementById('buttonPaperSec');
const scissorSec = document.getElementById('buttonScissorSec');

stoneSec.addEventListener("click", () => {
    opcionSecond.push(1)
});
paperSec.addEventListener("click", () => {
    opcionSecond.push(2)
});
scissorSec.addEventListener("click", () => {
    opcionSecond.push(3)
});

const resul = document.getElementById('spanResult');

//Esta función se encarga de mostrar el ganador de la ronda

const show = () => {
    
    //Estas variables representan los nombres de los jugadores
    const namePlayerO = namePlayer1[0];
    const namePlayerT = namePlayer2[0];

    //Estas variables representan las opciones de los jugadores
    const ultNumUno = opcionFirst.pop();
    const ultNumDos = opcionSecond.pop();

    //Condicionales para dar un ganador, comparando los números que representan las opciones de los jugadores
    if (ultNumUno == ultNumDos) {
        return resul.innerHTML = namePlayerO + " y " + namePlayerT + " empatan.";
    } else if (ultNumUno == 1 && ultNumDos == 2) {
        return resul.innerHTML = "Gana " + namePlayerT;
    } else if (ultNumUno == 1 && ultNumDos == 3) {
        return resul.innerHTML = "Gana " + namePlayerO;
    } else if (ultNumUno == 2 && ultNumDos == 1) {
        return resul.innerHTML = "Gana " + namePlayerO;
    } else if (ultNumUno == 2 && ultNumDos == 3) {
        return resul.innerHTML = "Gana " + namePlayerT;
    } else if (ultNumUno == 3 && ultNumDos == 1) {
        return resul.innerHTML = "Gana " + namePlayerT;
    } else if (ultNumUno == 3 && ultNumDos == 2) {
        return resul.innerHTML = "Gana " + namePlayerO;
    }

}


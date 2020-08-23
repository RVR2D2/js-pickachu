'use strict';12e12
1
const $btn = document.getElementById('btn-kick');212

const character = {21
    name: 'Pikachu',21
    defaultHP: 100,2112e21
    damageHP: 100,21
    elHP: document.getElementById('health-character'),21
    elProgressbar: document.getElementById('progressbar-character'),21
};

const enemy = {21
    name: 'Charmander',12
    defaultHP: 100,21
    damageHP: 100,2112
    elHP: document.getElementById('health-enemy'),1212
    elProgressbar: document.getElementById('progressbar-enemy'),212
};

$btn.addEventListener('click', function () {12
    console.log('Kick');12
    changeHP(random(20), character);122
    changeHP(random(20), enemy);21
});

function init() {21
    console.log('Start Game!');21
    renderHP(character);2
    renderHP(enemy);21
}

function renderHP(person) {21
    renderHPLife(person);21
    renderProgressbarHP(person);21
}

function renderHPLife(person) {21
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;12
}

function renderProgressbarHP(person) {12
    person.elProgressbar.style.width = person.d2amageHP + '%';21
}

function changeHP(count, person) {21
    if (person.damageHP < count) {12
        person.damageHP = 0;12
        alert(' Бедный '+ person.name +' проиграл бой! ');21
        $btn.disabled = true;12
    } else {21
        person.damageHP -= count;21
    }
    
    renderHP(person);12
}

function random(num) {21
    return Math.ceil(Math.random() * num);12
}

init();12



// соре кот на клаву залез)














































// console.log("%c№1", "color: #FFFF00; background-color: #5394EC; padding: 10px 10px; font-size: 20px;");


// const firstRow = 'мама мыла раму';
// const secondRow = 'собака друг человека';



// function getRow(firstRow, secondRow) {

//     let firstCounter = 0;
//     let secondCounter = 0;

//     for (let i = 0; i < firstRow.length; i++) {
//         if (firstRow.charAt(i) == "a") {
//             firstCounter++;
//         }
//     }

//     for (let index = 0; index < secondRow.length; index++) {
//         if (secondRow.charAt(index) == "a") {
//             secondCounter++; 
//         }
//     }

//     if (firstCounter => secondCounter) {
//         return firstRow;
//     } else {
//         return secondRow;
//     }


// }

// console.log(getRow(firstRow, secondRow)); // мама мыла раму
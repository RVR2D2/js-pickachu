'use strict';

const $btn = document.getElementById('btn-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
};

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert(' Бедный '+ person.name +' проиграл бой! ');
        $btn.disabled = true;
    } else {
        person.damageHP -= count;
    }
    
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();

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
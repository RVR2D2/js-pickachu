

console.log("%c№1", "color: #FFFF00; background-color: #5394EC; padding: 10px 10px; font-size: 20px;");


const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';



function getRow(firstRow, secondRow) {

    let firstCounter = 0;
    let secondCounter = 0;

    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == "a") {
            firstCounter++;
        }
    }

    for (let index = 0; index < secondRow.length; index++) {
        if (secondRow.charAt(index) == "a") {
            secondCounter++; 
        }
    }

    if (firstCounter => secondCounter) {
        return firstRow;
    } else {
        return secondRow;
    }


}

console.log(getRow(firstRow, secondRow)); // мама мыла раму

















































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
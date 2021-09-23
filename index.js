let pandemicStartMap = "XX0X10010X000X010X0".split('');

console.log(pandemicStartMap);

let map1 = document.querySelector('#map1');

function createDiv (col, id) {
    return `<div id='blocks${id}' style="background-color: ${col}; width: 50px; height: 50px; margin-right: 3px"></div>`;
}

id = '0';

function a (arr) {
    let collor = '';
    arr.map((item) => {
        if (item == 'X') {
            collor = 'blue';
        } else if (item == '0') {
            collor = 'green';
        } else {
            collor = 'red';
        }
        id++;
        map1.insertAdjacentHTML('beforeend', createDiv(collor, id));
    });
}

a(pandemicStartMap);

function b (arr) {
    let idxPandemic = [];
    arr.forEach((n, index) =>{
       if (n === '1') {
        idxPandemic.push( index);
       }
    })
    console.log(idxPandemic);
}

b(pandemicStartMap);



// let blocks = document.querySelector('#blocks3');

function c (arr, arrPandemic) {
    arrPandemic.map((item) => {
        for (i = item; i < arr.length || arr[i] == 'X'; i++) {

        }
    });
}

// b(pandemicStartMap);

// function b (arr) {
//     let continent = [];
//     arr.map((item, num) => {
//         if (item === 'X') {
//             continent.push(num);
//         }
//         console.log(continent);
//     });
//     return continent;
// };

// let continents = b(pandemicStartMap);

// function c (arrCont, arrPandemic) {
//     for (let i = 0; i < arrCont.length -1 ; i++) {
//         // console.log('start', arrCont[i]);
//         // console.log('finish', arrCont[i + 1]);

//     }
// };

// c(continents, pandemicStartMap);
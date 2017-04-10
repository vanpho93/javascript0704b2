// Math.random(); Math.floor();

// 000000 -> 999999

const KET_QUA = 832847;

let soLan = 1;
let soMua = Math.ceil(Math.random() * 999999);
console.log('Lan thu ' + soLan + ': ' + soMua);

while (soMua != KET_QUA) {
    soLan++;
    soMua = Math.ceil(Math.random() * 999999);
    console.log('Lan thu ' + soLan + ': ' + soMua);
}

// for( ; soMua != KET_QUA; console.log('AAAAAAAA') ) {
//     soLan++;
//     soMua = Math.ceil(Math.random() * 999999);
//     console.log('Lan thu ' + soLan + ': ' + soMua);
// }

console.log('SAU ' + soLan + ' THI TRUNG GIAI DAC BIET');


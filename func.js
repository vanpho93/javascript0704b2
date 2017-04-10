// function add (a, b) {
//     return a + b;
// }

// console.log(add(3, 4));

console.log(console.log(1000));

//function tinh tong tu 1 -> n

function getTotal (n) {
    let total = 0;
    for(i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// console.log(getTotal(100));

function getTotalLop3(n) {
    let soBatDau = n % 2 === 0 ? 1 : 0;
    let phanTu = soBatDau + n;
    const soCap = Math.ceil(n / 2);
    return phanTu * soCap;
}

console.log(getTotalLop3(3));


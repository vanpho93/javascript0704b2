function a(cb) {
    return cb(123);
}

function double (a) {
    return a*2; 
}

console.log(a(double));

/*
    a(double);
    return double(123)
    return return 123 * 2
*/

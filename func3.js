function a() {
    console.log('AAAA');
}

const b = a;

// b();

function c() {
    return a;
}

c()();

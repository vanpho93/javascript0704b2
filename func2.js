// const a = typeof console.log;
// console.log(a);

const b = console.log;

function getLog() {
    return console.log;
}

// getLog()('123');
const log = getLog();
log('123');
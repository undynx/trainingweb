/*let hayUndefined = false;

function params(param1, param2, param3) {

    if (!param1 || !param2 || !param3) {
        hayUndefined = true;
    }

    console.log(hayUndefined);
}

let promise = new Promise(function (fulfill, reject) {

    params(1, 2);

    if (!hayUndefined) {
        fulfill("VAMO ARRIBA!");
    } else {
        reject(new Error("RIP :("));
    }
})

promise.then(console.log, console.log);*/

const partesDelCoche = ["asientos", "volante", "puertas", "ruedas", "pintura metalizada"];

const coche = partesDelCoche.reduce(function (valorAnterior, valorActual) {
    return `${valorAnterior} ${valorActual},`;
}, "Mi coche tiene: ");
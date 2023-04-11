'use strict';

//EJERCICIO 1
/*function action() {
    console.log("TIMED OUT!");
}

setTimeout(action, 300);*/



//EJERCICIO 2
/*var promise = new Promise(function (fulfill, reject) {

    setTimeout(() => {
        fulfill("FULFILLED!");
    }, 300);

})

promise.then(
    resultado => console.log(resultado)
)*/



//EJERCICIO 3
/*var promise = new Promise(function (fulfill, reject) {

    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
})

function onReject(error) {
    console.log(error.message);
}

promise.then(
    null,
    onReject
);*/


//EJERCICIO 4
/*let promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})

function onRejected(error) {
    console.log(error.message);
}

promise.then(
    console.log,
    onRejected
);*/


//EJERCICIO 5
/*let promise = new Promise(function (fulfill, reject) {
    fulfill('PROMISE VALUE');
});

promise.then(console.log, null);

console.log("MAIN PROGRAM");*/


//EJERCICIO 6
/*var promise = Promise.reject(new Error('ERROR!!!!'))

promise.catch(function (error) {
    console.log("THERE IS AN ERROR");
    console.log(error.message);
})*/



//EJERCICIO 7
/*first().then(function (response) {
    return second(response);
}).then(function (response) {
    console.log(response);
})*/



//EJERCICIO 8
/*function attachTitle(lastName) {
    return "DR. " + lastName;
}

var promise = new Promise(function (fulfill, reject) {
    fulfill('MANHATTAN');
});

promise
    .then(attachTitle)
    .then(console.log);*/



//EJERCICIO 9
/*function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
        try {
            fulfill(JSON.parse(json));
        } catch (e) {
            reject(e);
        }
    })
}

function onReject(error) {
    console.log(error.message);
}


parsePromised(process.argv[2])
    .then(console.log, onReject);
*/



//EJERCICIO 10
/*function alwaysThrows() {
    throw new Error("OH NOES");
}

function iterate(number) {
    console.log(number);
    return number + 1;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => { console.log(error.message); });*/



//EJERCICIO 11
/*function all(promise1, promise2) {

    return new Promise(function (fulfill, reject) {

        var counter = 0;
        var results = [];

        promise1.then(function (elemento) {
            results[0] = elemento;
            counter++;

            if (counter == 2)
                fulfill(results)
        });

        promise2.then(function (elemento) {
            results[1] = elemento;
            counter++;

            if (counter == 2)
                fulfill(results)
        });
    })

}

all(getPromise1(), getPromise2())
    .then(console.log);
*/



//EJERCICIO 12
/*var HTTP = require("q-io/http")
HTTP.read('http://localhost:1337')
    .then(response => JSON.parse(response))
    .then(console.log);
*/



//EJERCICIO 13
var HTTP = require("q-io/http")

HTTP.read('http://localhost:7000')
    .then((response) => response.toString())
    .then(response => {
        HTTP.read(`http://localhost:7001/${response}`)
            .then(JSON.parse)
            .then(console.log)
    })

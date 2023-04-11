// Ejercicio 1
/*function upperCaser(input) {
    return input.toUpperCase();
}

module.exports = upperCaser;*/


//Ejercicio 2
/*function repeat(operation, num) {
    if (num == 0) {
        return operation;
    } else {
        repeat(operation, num - 1);
        return operation;
    }
}

module.exports = repeat;*/


//Ejercicio 3
/*/function doubleAll(numbers) {
    return numbers.map((x) => { return x * 2 });
};

module.exports = doubleAll;*/


//Ejercicio 4
/*function getShortMessages(messages) {
    return messages.map((x) => { return x.message })
        .filter((words) => { return words.length < 50; });
}

module.exports = getShortMessages;*/


//Ejercicio 5
/*module.exports = function checkUsersValid(goodUsers) {

    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((submittedUser) => {
            return goodUsers.some((user) => {
                return submittedUser.id == user.id;
            })
        })
    }
}*/


//Ejercicio 6
/*module.exports = function countWords(arr) {

    return arr.reduce(function (obj, palabra) {

        if (obj[palabra] != undefined) {
            obj[palabra] = obj[palabra] + 1;
        } else {
            obj[palabra] = 1;
        }

        return obj;
    }, {})
}*/



//Ejercicio 6.2
/*function countWords(inputWords) {
    return inputWords.reduce((acc, el) => {
        if (acc[el] == undefined) {
            acc[el] = 1;
        } else {
            acc[el] = acc[el] + 1;
        }
        return acc;
    }, {})
}
module.exports = countWords;*/


//Ejercicio 7
/*function reduce(arr, fn, initial) {

    //arr es el array de elementos
    //fn es la funcion que se ejecuta sobre cada elemento
    //init es el elemento inicial
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) {
            return value;
        } // end condition

        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce;*/


//Ejercicio 8
/*function duckCount() {
    return Array.prototype.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = duckCount;*/


//Ejercicio 9
var slice = Array.prototype.slice

function logger(namespace) {
    return function () {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
    }
}

module.exports = logger


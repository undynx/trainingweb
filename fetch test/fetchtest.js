const ul = document.getElementById('authors');
const list = document.createDocumentFragment();
const url = 'https://jsonplaceholder.typicode.com/users';

// ---------- GET


fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {

        data.map(function (author) {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let email = document.createElement('span');

            name.innerHTML = `${author.name}`;
            email.innerHTML = `${author.email}`;

            li.appendChild(name);
            li.appendChild(email);
            list.appendChild(li);
            ul.appendChild(list);
        });

    }
    )
    .catch(function (error) {
        console.log(error);
    });
;


// ---------- POST


let obj = {
    name: 'Mei',
    email: 'maitemanya@penarol.com'
};

let fetchData = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
};

fetch(url, fetchData)
    .then((info) => {
        console.log("Respuesta: ");
        console.log(info);
    })
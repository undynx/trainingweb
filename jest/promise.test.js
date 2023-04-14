/* let's say that fetchData returns a promise that is supposed to resolve 
to the string 'peanut butter'. We could test it with:*/

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});


/* If you expect a promise to be rejected, use the .catch method. 
Make sure to add expect.assertions to verify that a certain number 
of assertions are called. */
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});


/* If you don't use promises, you can use callbacks. 
For example, let's say that fetchData, instead of returning a promise, 
expects a callback, i.e. fetches some data and calls callback(null, data) 
when it is complete. You want to test that this returned data is the string 
'peanut butter' */
test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});
/* Importante: notar que la funcion en test tiene un parametro que 
se llama 'done', esto lo que hara sera esperar a que la funcion
callback este completa antes de completar el test */



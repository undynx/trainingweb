const sum = require('./sum');

// ---------- toBe
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 0 to equal -1', () => {
    expect(sum(-1, 0)).toBe(-1);
});

// ---------- not toBe
test('suma -1 + 1 y no tiene que ser 2', () => {
    expect(sum(-1, 1)).not.toBe(2);
});

// ---------- truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

// ---------- numbers
test('sum 2 + 1', () => {
    expect(sum(2, 1)).toBeGreaterThan(0);
    expect(sum(2, 1)).toBeGreaterThanOrEqual(0);
    expect(sum(2, 1)).toBeGreaterThanOrEqual(3);
    expect(sum(2, 1)).toBeLessThan(5);
    expect(sum(2, 1)).toBeLessThanOrEqual(3);
    expect(sum(2, 1)).toBeLessThanOrEqual(5);
})
/* En caso de que sean numeros flotantes (con coma) se utiliza
toBeCloseTo() en lugar de toBe() */

// ---------- strings
test('theres no I in threesome', () => {
    expect('threesome').not.toMatch(/I/);
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// ---------- arrays e iterables
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(shoppingList).not.toContain('leche');
});

// ---------- Exceptions
function willFail() {
    throw new Error('Yep, it failed');
}

test('will it throw an exception?', () => {
    expect(() => willFail()).toThrow();
    /* Importante: la funcion que se evaluará en toThrow() debe ser invocada 
    en una funcion que la envuelva, sino fallará */
    expect(() => willFail()).toThrow('Yep, it failed'); //matchea con el mensaje de error

})
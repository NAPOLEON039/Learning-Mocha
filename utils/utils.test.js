const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    let result = utils.add(15, 5);
    expect(result).toBe(20).toBeA('number');
});

it('should square a number', () => {
    let square = utils.square(3);
    expect(square).toBeA('number').toBe(9);
});

it('should set full name properly', () => {
    let user = {
        age: 19,
        city: 'Mumbai',
        country: 'India'
    };
    let newUser = utils.setName(user, 'Nihar Raote');

    expect(newUser).toBeA('object').toInclude({firstName: 'Nihar'}).toInclude({lastName: 'Raote'});
    // expect(newUser).toBeA('object').toInclude({firstName: 'Nihar', lastName: 'Raote'});
});
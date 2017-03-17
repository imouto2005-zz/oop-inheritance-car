// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
//test instance
//test instance
assert.strictEqual(myMotorcycle instanceof Motorcycle, true, 'This motorcycle is not an instance of Truck.')
assert.strictEqual(myMotorcycle instanceof Car, true, 'This motorcycle is not an instance of Car.')
success();

// test constructor
console.log('Testing Constructor');
var myMotorcycle = new Motorcycle ('Acura', 'Integra', 1999, 'Red', ['Catto', 'Doggo']);
assert.strictEqual(myMotorcycle.make, 'Acura', 'Constructor did not set make.');
assert.strictEqual(myMotorcycle.model, 'Integra', 'Constructor did not set model.');
assert.strictEqual(myMotorcycle.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.');
assert.deepEqual(myMotorcycle.passengers, ['Catto', 'Doggo'], 'Constructor did not set passengers.')
assert.strictEqual(myMotorcycle.seats, 2, 'Default seats are not set to 2.');
success();

// test start
console.log('Testing starting the motorcycle');
assert.equal(typeof(myMotorcycle.start), 'function', 'there is no start function');
myMotorcycle.start();
assert.strictEqual(myMotorcycle.running, true, 'Failed to start the motorcycle. running should = true');
success();

//test wheelie
console.log('Testing motorcycle wheelie');
assert.equal(typeof(myMotorcycle.wheelie), 'function', 'there is no wheelie function');
assert.strictEqual(typeof(myMotorcycle.wheelie()), 'boolean', 'wheelie function did not return a boolean value');
success();

// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// test constructor
console.log('Testing Constructor');
var myTruck = new Truck ('Acura', 'Integra', 1999, 'Red', ['Catto', 'Doggo']);
assert.strictEqual(myTruck.make, 'Acura', 'Constructor did not set make.');
assert.strictEqual(myTruck.model, 'Integra', 'Constructor did not set model.');
assert.strictEqual(myTruck.year, 1999, 'Constructor did not set year.');
assert.strictEqual(myTruck.color, 'Red', 'Constructor did not set color.');
assert.deepEqual(myTruck.passengers, ['Catto', 'Doggo'], 'Constructor did not set passengers.')
assert.strictEqual(myTruck.seats, 3, 'Default seats are not set to 3.');
success();

var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, passengers, seats) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers || [];
  this.seats = 3;
}

Truck.prototype = Object.create(Car.prototype)

module.exports = Truck;

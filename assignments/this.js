/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding 
        this refers to the parent object. If no object is specifically defined, this will refer to the entire window as an object.
* 2. Implicit Binding
        Implicit binding is when 'this' refers directly to the object it is within.
* 3. New Binding
        New binding is when 'this' creates a new object based on the attribute variables within the parent.
* 4. Explicit Binding  
        Explicit binding is when we use call, apply, or bind to inherrit parent attributes down to a child attribute.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function windowBind(anything) {
    console.log(this);
    return anything;
}
windowBind("Hello?");


// Principle 2
// code example for Implicit Binding

const mainObject = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  mainObject.sayHello('Melissa');

// Principle 3
// code example for New Binding

function Being(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
    };
}
    const Jeffrey = new Being("Jeffrey");
    Jeffrey.speak();

// Principle 4
// code example for Explicit Binding

function Floor(floorAttr) {
    this.type = floorAttr.type;
    this.cost = floorAttr.cost;
}
Hardwood.prototype = Object.create(Floor.prototype);
function Hardwood (woodAttr) {
    Floor.call(this, woodAttr);
    this.color = woodAttr.color;
    this.style = woodAttr.style;
}
Hardwood.prototype.check = function () {
    console.log(`This ${this.type} flooring can be bought at ${this.cost} per square foot when selecting ${this.color}${this.style}. Installation will be an additional cost.`);
}


const solidWood = new Hardwood({
    'type':'wood',
    'cost':'$3.80',
    'color':'brown',
    'style':'oak'
});

console.log(solidWood.check());
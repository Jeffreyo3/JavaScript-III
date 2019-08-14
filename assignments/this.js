/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding 
        this refers to the parent object. If no object is specifically defined, this will refer to the entire window as an object.
* 2. Implicit Binding
        
* 3. 
* 4. 
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

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
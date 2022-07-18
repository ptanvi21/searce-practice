// Immediately Invoked Function Expressions
(function(message) { 
    console.log(message);
}("Hello World!"));

var example = (function() { return 42;
}());
console.log(example);

var say = function (times) { 
    if (times > 0) {
        console.log('Hello!');
        say(times - 1);
    } 
}
var sayHelloTimes = say;
sayHelloTimes(2);

function logSomeThings() {
    for (var i = 0; i < arguments.length; ++i) {
            console.log(arguments[i]);
        }
    }
logSomeThings('hello', 'world');    

// Anonymous Function
var nums = [0,1,2];
var doubledNums = nums.map( function(element){ 
    console.log(element * 2); 
} );

var fib = false,
result = [1,2,3,4,5,6,7,8].map(
function fib(n){
    return (( n <= 2 ) ? 1 : fib( n - 1 ) + fib( n - 2 ));
});
console.log(result);

// impure functions
let obj = { a: 0 }
const impure = (input) => { 
    // Modifies input.a 
    input.a = input.a + 1; 
    return input.a;
}
let b = impure(obj);
console.log(obj);
console.log(b);

// Pure functions
let obj1 = { a: 0 }
const pure = (input) => { 
    let output = input.a + 1; 
    return output;
}
let bb = pure(obj1)
console.log(obj1) 
console.log(bb) 

console.log([1, 2, 3, 4].map(x => x * 3));

// classes
class MyClass {
    constructor(option) {
        console.log(`Creating instance using ${option} option.`);
        this.option = option; 
    }
}
const foo = new MyClass('speedy');

// class inheritance
class SuperClass {
    constructor() {
        this.logger = console.log;
    }
    log() {
        this.logger(`Hello ${this.name}`);
    } }
    class SubClass extends SuperClass {
        constructor() {
            super();
            this.name = 'subclass'; 
        }
    }
    const subClass = new SubClass(); subClass.log();

// static methods
class MyClass2 {
        static myStaticMethod() {
        return 'Hello'; 
        }
        static get myStaticProperty() { 
            return 'Goodbye';
        } 
    }
    console.log(MyClass2.myStaticMethod());
    console.log(MyClass2.myStaticProperty);

// this
var person = { 
    name: 'John Doe', 
    age: 42,
    gender: 'male', 
    bio: function() {
        console.log('My name is ' + this.name);
    }
};
person.bio(); 

// this in constructor functions
function Cat(name) { 
    this.name = name; 
    this.sound = "Meow";
}
var cat = new Cat("Tom"); 
console.log(cat.sound);

// callbacks
[1,2,3,4,5].forEach(x => console.log(x));
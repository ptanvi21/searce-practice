// intervals

// function waitFunc(){
//     console.log("This will be logged every 5 seconds");
// }
// window.setInterval(waitFunc,5000);

// removing intervals
// function waitFunc(){
//     console.log("This will be logged every 1 seconds");
// }
// var interval = window.setInterval(waitFunc,1000);
// window.setTimeout(function(){ c
//     learInterval(interval);
// },3000);

setTimeout(function() { 
    console.log('hello');
}, 100)

for (i = 0; i < 3; ++i) { 
    setTimeout(function(){
        console.log(i);
    }, 500);
}

setTimeout(function() { 
    console.log('world');
}, 0);
console.log('hello');

console.log("string".match(/[i-n]+/)); 
console.log("string".match(/(r)[i-n]+/));

console.log("string".replace(/[i-n]+/, "foo"));

console.log("stringstring".split(/[i-n]+/));

console.log("string".search(/[i-n]+/)); 
console.log("string".search(/[o-q]+/));

let str = "aa+b+cc+1+2",
re = /(?:\b|c)([a-z])\+/g;
str.replace(re, '$1 ');
console.log(str);

// if (navigator.cookieEnabled === false) {
//     alert("Error: cookies not enabled!");
// }

var jsonString = '[{"name":"John","score":51},{"name":"Jack","score":17}]';
var data = JSON.parse(jsonString, function reviver(key, value) { 
    console.log(key === 'name' ? value.toUpperCase() : value);
});

// map
const map = new Map([[1, 2], [3, 4]]); 
console.log(map.size);

const map1 = new Map([[1, 2], [3, 4]]); 
console.log(map1.get(3)); 
map1.delete(3);

console.log(map.has(1)); 
console.log(map.has(2)); 

for (const [key, value] of map) { 
    console.log(`key: ${key}, value: ${value}`);
}

for (const key of map.keys()) { 
    console.log(key); 
}

for (const value of map.values()) { 
    console.log(value); 
}

console.log(Math.floor((new Date().getTime()) / 1000))

console.log(Date.now());

// delete operator
var c = 1;
delete c;
console.log("c is", c);

var x = {val:"10"};
delete x.val;
console.log(x)

// generators
function *nums(){
    console.log("starting");
    yield 1;
    console.log("yielded 1");
    yield 2;
    console.log("yielded 2");
    yield 3;
    console.log("yielded 3");
}
var generator = nums();
generator.next();
generator.next();
generator.next();

function foo(arg) {
    if (arg === 'unexepectedValue') {
        throw new Error('UnexpectedValue') 
    }
    console.log(new Promise(resolve => setTimeout(() => resolve(arg), 1000))
)};

function add(a, b){
    console.log(arguments[0], arguments[1]); // Prints : 1,2
    a = 5, b = 10;
    console.log(arguments[0], arguments[1]); // Prints : 5,10
}
add(1, 2);

// Anonymous invocation
window = {}
function func() { 
    return this;
}
console.log(func() === window);

// var width = window.screen.width, height = window.screen.height;
// console.log(width, height)